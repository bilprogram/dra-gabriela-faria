/**
 * SERVIÇOS: Odontologia Dra. Gabriela Faria
 * Sincronização editorial entre rolagem, trilho de progresso, moldura fixa e legenda ativa
 * Baseado na referência canônica do projeto e respeitando prefers-reduced-motion
 */

export function initServicosJornada() {
  const container = document.getElementById('servicos') || document.getElementById('servicos-jornada') || document.querySelector('.servicos-sec.jor');
  if (!container || container.dataset.jorInitialized === 'true') return;
  container.dataset.jorInitialized = 'true';

  const etapas = container.querySelector('.jor-etapas');
  const passos = Array.from(container.querySelectorAll('.jor-passo'));
  const nos = passos.map((p) => p.querySelector('.jor-passo__no'));
  const trilho = container.querySelector('.jor-trilho');
  const trilhoFill = container.querySelector('.jor-trilho__fill');
  const quadros = Array.from(container.querySelectorAll('.jor-quadro'));
  const nomes = Array.from(container.querySelectorAll('.jor-legenda__nome'));
  const botoes = Array.from(container.querySelectorAll('.jor-nav__btn'));
  const total = passos.length;

  if (!etapas || !passos.length) return;

  const mediaReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = mediaReduce.matches;
  mediaReduce.addEventListener('change', (e) => {
    isReducedMotion = e.matches;
    atualizarLayout();
    atualizarScroll();
  });

  // Medidas em cache do layout e limites dos passos (evita layout thrashing no scroll)
  let cachedLimites = [];
  let cachedInicio = 0;
  let cachedFim = 0;

  function recalcularCentros() {
    if (passos.length < 2) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const centros = passos.map((p) => {
      const el = p.querySelector('h2, h3') || p;
      const rect = el.getBoundingClientRect();
      return rect.top + scrollY + rect.height / 2;
    });

    cachedLimites = centros.map((c, i) => {
      if (i === 0) return centros[0] - window.innerHeight * 0.25;
      return (centros[i - 1] + centros[i]) / 2;
    });

    cachedInicio = centros[0];
    cachedFim = centros[total - 1];
  }

  // Atualiza medidas do trilho vertical
  function atualizarLayout() {
    if (!nos[0] || !nos[total - 1]) return;
    const etapasRect = etapas.getBoundingClientRect();
    const noPrimeiro = nos[0].getBoundingClientRect();
    const noUltimo = nos[total - 1].getBoundingClientRect();

    const t0 = noPrimeiro.top + noPrimeiro.height / 2 - etapasRect.top;
    const tH = Math.max(0, noUltimo.top + noUltimo.height / 2 - etapasRect.top - t0);

    etapas.style.setProperty('--jor-t0', `${t0.toFixed(1)}px`);
    etapas.style.setProperty('--jor-th', `${tH.toFixed(1)}px`);

    recalcularCentros();
  }

  let ativoIndex = -1;
  let ultimoProgresso = -1;

  function atualizarEstado(index, progressoFrac = 0) {
    const novoIndex = Math.max(0, Math.min(total - 1, index));
    const mudouIndex = novoIndex !== ativoIndex;

    if (mudouIndex) {
      ativoIndex = novoIndex;
      container.style.setProperty('--jor-i', ativoIndex);

      // Atualiza classes dos passos
      passos.forEach((p, i) => {
        const isAtivo = i === ativoIndex;
        const isFeito = i <= ativoIndex;
        p.classList.toggle('is-ativo', isAtivo);
        p.classList.toggle('is-feito', isFeito);
      });

      // Atualiza quadros de imagem
      quadros.forEach((q, i) => {
        q.classList.toggle('is-ativo', i === ativoIndex);
      });

      // Atualiza nomes na legenda
      nomes.forEach((nome, i) => {
        nome.classList.toggle('is-ativo', i === ativoIndex);
        nome.classList.toggle('is-antes', i < ativoIndex);
      });

      // Atualiza botões de navegação
      botoes.forEach((btn, i) => {
        if (i === ativoIndex) {
          btn.setAttribute('aria-current', 'step');
        } else {
          btn.removeAttribute('aria-current');
        }
      });
    }

    // Atualiza progresso da barra vertical apenas quando houver delta perceptível
    if (trilhoFill && Math.abs(progressoFrac - ultimoProgresso) > 0.003) {
      ultimoProgresso = progressoFrac;
      trilhoFill.style.transform = `scaleY(${Math.max(0, Math.min(1, progressoFrac)).toFixed(4)})`;
    }
  }

  function calcularProgresso() {
    if (passos.length < 2 || !cachedLimites.length) return { index: 0, progresso: 1 };

    const scrollY = window.scrollY || window.pageYOffset;
    const triggerY = scrollY + window.innerHeight * 0.5;

    let index = 0;
    for (let i = 0; i < cachedLimites.length; i++) {
      if (triggerY >= cachedLimites[i]) {
        index = i;
      }
    }

    const progresso = (triggerY - cachedInicio) / Math.max(1, cachedFim - cachedInicio);

    return {
      index: Math.max(0, Math.min(total - 1, index)),
      progresso: Math.max(0, Math.min(1, progresso)),
    };
  }

  let ticking = false;
  function atualizarScroll() {
    if (isReducedMotion) {
      // Estado estático com todos visíveis
      passos.forEach((p) => {
        p.classList.add('is-ativo', 'is-feito');
      });
      return;
    }

    const { index, progresso } = calcularProgresso();
    atualizarEstado(index, progresso);
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        atualizarScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Interação ao clicar nos botões da legenda
  botoes.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const passoAlvo = passos[i];
      if (passoAlvo) {
        passoAlvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Foco acessível por teclado
  passos.forEach((p, i) => {
    const heading = p.querySelector('h2, h3');
    if (heading) {
      heading.addEventListener('focus', () => {
        atualizarEstado(i, i / Math.max(1, total - 1));
      });
    }
  });

  // Gerenciamento de rolagem condicional via IntersectionObserver
  // (Ativa o listener de scroll somente quando a seção está próxima ou no viewport,
  // eliminando qualquer custo de CPU/GPU nas seções anteriores como #sobre e #cuidado)
  let isScrollAttached = false;
  let isIntersecting = false;

  function attachScroll() {
    if (!isScrollAttached) {
      window.addEventListener('scroll', onScroll, { passive: true });
      isScrollAttached = true;
    }
  }

  function detachScroll() {
    if (isScrollAttached) {
      window.removeEventListener('scroll', onScroll);
      isScrollAttached = false;
    }
  }

  // Observador de redimensionamento
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(() => {
      atualizarLayout();
      if (isIntersecting || !('IntersectionObserver' in window)) {
        atualizarScroll();
      }
    });
    ro.observe(etapas);
  } else {
    window.addEventListener('resize', () => {
      atualizarLayout();
      if (isIntersecting || !('IntersectionObserver' in window)) {
        atualizarScroll();
      }
    }, { passive: true });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === container) {
            isIntersecting = entry.isIntersecting;
            if (isIntersecting) {
              recalcularCentros();
              atualizarLayout();
              atualizarScroll();
              attachScroll();
            } else {
              detachScroll();
            }
          }
        }
      },
      { rootMargin: '350px 0px 350px 0px' }
    );
    io.observe(container);
  } else {
    attachScroll();
  }

  // Inicialização inicial
  document.documentElement.classList.add('js');
  atualizarLayout();
  atualizarScroll();
}

document.addEventListener('DOMContentLoaded', () => {
  initServicosJornada();
});

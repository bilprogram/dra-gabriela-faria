/**
 * MÓDULO REVEAL: Odontologia Dra. Gabriela Faria
 * IntersectionObserver bidirecional de alto desempenho
 * Funciona rolando para cima e para baixo sem prender elementos invisíveis
 * Suporta .reveal-up, .reveal-blur, .reveal-hero-img, .reveal-fade e divisão acessível de .reveal-lines
 */

export function initReveal() {
  // Marca documento com suporte a JS
  document.documentElement.classList.add('js');

  const targets = document.querySelectorAll('.reveal-up, .reveal-blur, .reveal-hero-img, .reveal-fade, .reveal-lines');

  // Se o usuário prefere movimento reduzido, revela tudo instantaneamente
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => {
      el.classList.add('is-revealed');
    });
    return;
  }

  // 1. Processar .reveal-lines (preservando texto acessível completo para leitores de tela)
  const lineHeadings = document.querySelectorAll('.reveal-lines');
  lineHeadings.forEach((heading) => {
    if (heading.dataset.splitDone) return;

    const originalText = heading.textContent.trim();
    if (!heading.getAttribute('aria-label')) {
      heading.setAttribute('aria-label', originalText);
    }

    // Coleta nós de texto ou quebras manuais <br>
    const lines = heading.innerHTML
      .split(/<br\s*\/?>/gi)
      .map((l) => l.trim())
      .filter(Boolean);

    heading.innerHTML = '';
    lines.forEach((lineText, index) => {
      const mask = document.createElement('span');
      mask.className = 'reveal-line-mask';
      mask.setAttribute('aria-hidden', 'true');

      const inner = document.createElement('span');
      inner.className = 'reveal-line-inner';
      inner.style.setProperty('--delay', `${0.12 * index}s`);
      inner.innerHTML = lineText;

      mask.appendChild(inner);
      heading.appendChild(mask);
    });

    heading.dataset.splitDone = 'true';
  });

  // 2. Configurar IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Elementos revelados permanecem visíveis para navegação bidirecional estável
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -4% 0px',
      threshold: 0.05,
    }
  );

  targets.forEach((el) => observer.observe(el));

  // 3. Fallback de segurança: revela o Hero imediatamente no carregamento sem depender de scroll
  const heroElements = document.querySelectorAll('#inicio .reveal-up, #inicio .reveal-hero-img, #inicio .reveal-fade, #inicio .reveal-lines');
  requestAnimationFrame(() => {
    heroElements.forEach((el) => el.classList.add('is-revealed'));
  });
}

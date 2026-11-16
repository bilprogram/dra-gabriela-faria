/**
 * DÚVIDAS FREQUENTES & ACORDEÃO INTERATIVO: Odontologia Dra. Gabriela Faria
 * Acordeão acessível (WAI-ARIA), suave e com suporte a teclado (Enter, Espaço e Setas).
 * Respeita prefers-reduced-motion e não gera layout thrashing.
 */

export function initDuvidas() {
  const container = document.querySelector('[data-duvidas]');
  if (!container || container.dataset.duvidasInitialized === 'true') return;
  container.dataset.duvidasInitialized = 'true';

  const items = Array.from(container.querySelectorAll('.duvidas-item'));
  const botoes = Array.from(container.querySelectorAll('.duvidas-item__botao'));

  if (!items.length || !botoes.length) return;

  function alternarItem(index, abrir) {
    const item = items[index];
    const botao = botoes[index];
    if (!item || !botao) return;

    const deveAbrir = typeof abrir === 'boolean' ? abrir : !item.classList.contains('is-aberto');

    if (deveAbrir) {
      // Fecha os demais para manter leitura focada
      items.forEach((outroItem, outroIndex) => {
        if (outroIndex !== index && outroItem.classList.contains('is-aberto')) {
          outroItem.classList.remove('is-aberto');
          botoes[outroIndex]?.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.add('is-aberto');
      botao.setAttribute('aria-expanded', 'true');
    } else {
      item.classList.remove('is-aberto');
      botao.setAttribute('aria-expanded', 'false');
    }
  }

  botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
      alternarItem(index);
    });

    botao.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const prox = botoes[(index + 1) % botoes.length];
        prox?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const ant = botoes[(index - 1 + botoes.length) % botoes.length];
        ant?.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        botoes[0]?.focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        botoes[botoes.length - 1]?.focus();
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDuvidas);
  } else {
    initDuvidas();
  }
}


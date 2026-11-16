/**
 * CONTROLE DO HEADER: Odontologia Dra. Gabriela Faria
 * Recolhe ao rolar para baixo, reaparece ao rolar para cima.
 * Aplica fundo fosco (.is-scrolled) quando sai do topo.
 */

export function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Fundo fosco com blur após 40px
    if (currentScrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    // Comportamento esconde/mostra
    if (currentScrollY > 120 && currentScrollY > lastScrollY) {
      // Rolando para baixo -> esconde
      header.classList.add('is-hidden');
    } else {
      // Rolando para cima -> mostra
      header.classList.remove('is-hidden');
    }

    lastScrollY = Math.max(0, currentScrollY);
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true }
  );
}


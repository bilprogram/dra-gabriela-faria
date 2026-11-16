/**
 * CONTROLE DO HEADER: Odontologia Dra. Gabriela Faria
 * Mantém o nav visível e estável ao longo de toda a página.
 * Aplica efeito de vidro fosco translúcido (.is-scrolled) ao rolar e
 * restaura a transparência suavemente ao retornar ao topo.
 */

export function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header || header.dataset.headerInitialized === 'true') return;
  header.dataset.headerInitialized = 'true';

  // Em páginas dedicadas de fundo claro (como servicos.html), mantém o estado fosco ativo
  const isDedicatedLightPage = document.body.classList.contains('servicos-pagina') || !document.getElementById('inicio');

  let ticking = false;

  function updateHeader() {
    if (isDedicatedLightPage) {
      header.classList.add('is-scrolled');
      ticking = false;
      return;
    }

    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Fundo de vidro fosco premium a partir de 40px de rolagem
    if (currentScrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

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

  // Sincroniza estado no carregamento inicial
  updateHeader();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
}


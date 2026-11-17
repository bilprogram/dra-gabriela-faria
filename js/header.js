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

  // =========================================================================
  // Controle de Navegação Mobile (Menu Toggle / Acessibilidade WAI-ARIA)
  // =========================================================================
  const nav = header.querySelector('.site-header__nav');
  const toggleBtn = header.querySelector('.site-header__toggle');

  if (toggleBtn && nav) {
    function openMenu() {
      header.classList.add('is-menu-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.setAttribute('aria-label', 'Fechar menu');
      document.body.classList.add('menu-open-scroll-lock');
    }

    function closeMenu() {
      header.classList.remove('is-menu-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menu');
      document.body.classList.remove('menu-open-scroll-lock');
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = header.classList.contains('is-menu-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fecha o menu ao selecionar qualquer link da navegação
    nav.querySelectorAll('.site-header__link').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Fecha o menu ao pressionar a tecla Escape e devolve o foco ao botão
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('is-menu-open')) {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Fecha o menu ao clicar fora do cabeçalho
    document.addEventListener('click', (e) => {
      if (header.classList.contains('is-menu-open') && !header.contains(e.target)) {
        closeMenu();
      }
    });

    // Fecha automaticamente ao redimensionar a tela para breakpoint desktop
    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth > 900 && header.classList.contains('is-menu-open')) {
          closeMenu();
        }
      },
      { passive: true }
    );
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
}


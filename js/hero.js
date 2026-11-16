/**
 * CINEMÁTICA E PARALLAX DO HERO: Odontologia Dra. Gabriela Faria
 * Parallax de alto desempenho via requestAnimationFrame e passive listeners
 * Desativação automática fora do viewport e em prefers-reduced-motion
 * Efeito magnético suave no botão primário e leve desvio do mouse (desktop fino)
 */

export function initHero() {
  const hero = document.getElementById('inicio');
  if (!hero) return;

  const bgImg = hero.querySelector('.hero__img');
  const heroContent = hero.querySelector('.hero__content');
  const ctaBtn = hero.querySelector('.hero__actions .btn--primary');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let isHeroVisible = true;
  let scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let heroHeight = hero.offsetHeight;
  let ticking = false;

  // 1. IntersectionObserver para suspender listeners de scroll quando hero não estiver visível
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isHeroVisible = entry.isIntersecting;
      });
    },
    { root: null, threshold: 0 }
  );
  heroObserver.observe(hero);

  // 2. Parallax de Scroll
  function updateScrollParallax() {
    if (!isHeroVisible) {
      ticking = false;
      return;
    }

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll <= heroHeight + 50) {
      // Background desloca a ~0.15x e escala muito sutilmente (1.00 para 1.03)
      const progress = Math.min(Math.max(currentScroll / heroHeight, 0), 1);
      const bgY = currentScroll * 0.15;
      const bgScale = 1.0 + progress * 0.03;

      const heroSlides = hero.querySelector('.hero__slides');
      if (heroSlides) {
        heroSlides.style.transform = `translate3d(0, ${bgY.toFixed(1)}px, 0) scale(${bgScale.toFixed(3)})`;
      }
    }

    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'resize',
    () => {
      heroHeight = hero.offsetHeight;
    },
    { passive: true }
  );

  // 3. Efeito Magnético Suave no Botão Primário (Somente Pointer: Fine) - Sem Parallax de Mouse no Background
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (isFinePointer) {
    hero.addEventListener(
      'mousemove',
      (e) => {
        if (!isHeroVisible) return;

        // Botão magnético (raio de 60px, máx 6px deslocamento suave)
        const activeBtn = hero.querySelector('.hero__content.is-active .btn--primary') || ctaBtn;
        if (activeBtn) {
          const btnRect = activeBtn.getBoundingClientRect();
          const btnCenterX = btnRect.left + btnRect.width / 2;
          const btnCenterY = btnRect.top + btnRect.height / 2;
          const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

          if (dist < 60) {
            const pullX = ((e.clientX - btnCenterX) / 60) * 6;
            const pullY = ((e.clientY - btnCenterY) / 60) * 6;
            activeBtn.style.transform = `translate3d(${pullX.toFixed(1)}px, ${pullY.toFixed(1)}px, 0)`;
          } else {
            activeBtn.style.transform = '';
          }
        }
      },
      { passive: true }
    );

    hero.addEventListener('mouseleave', () => {
      const allBtns = hero.querySelectorAll('.hero__actions .btn--primary');
      allBtns.forEach((btn) => {
        btn.style.transform = '';
      });
    });
  }
}


/**
 * CONTROLE DA JORNADA DE CHEGADA EM 3 CENAS: Odontologia Dra. Gabriela Faria
 * Transição suave crossfade (1.2s) com zoom out ultra-sutil (1.03 -> 1.00)
 * Ciclo de 4s por cena (SCENE_DURATION configurável), pausa pontual na barra de controles,
 * visibilitychange, acessibilidade e respeito a prefers-reduced-motion.
 */

export function initHeroScenes() {
  const hero = document.getElementById('inicio');
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll('.hero__slide'));
  if (slides.length <= 1) return;

  const sceneBar = hero.querySelector('.hero__scene-bar');
  const contentBlocks = Array.from(hero.querySelectorAll('[data-scene-content]'));
  const labelEl = hero.querySelector('[data-hero-caption]');
  const progressLine = hero.querySelector('[data-hero-progress]');
  const toggleBtn = hero.querySelector('[data-hero-toggle]');
  const toggleIconPlay = toggleBtn ? toggleBtn.querySelector('.hero-toggle-icon--play') : null;
  const toggleIconPause = toggleBtn ? toggleBtn.querySelector('.hero-toggle-icon--pause') : null;

  // Constante única e centralizada para velocidade do carrossel (4 segundos)
  const SCENE_DURATION = 3500;
  const TRANSITION_DURATION = 750; // 0.75s crossfade mais ágil

  // Parâmetro de depuração via URL: ?debug=1
  const isDebug = new URLSearchParams(window.location.search).get('debug') === '1';
  function logDebug(...args) {
    if (isDebug) {
      console.log('[HeroScenes]', new Date().toISOString().substring(11, 23), ...args);
    }
  }

  logDebug('Inicializando módulo hero-scenes. Slides:', slides.length, 'Duração por cena:', SCENE_DURATION);

  // Acessibilidade: prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    logDebug('prefers-reduced-motion ativo: rotação estática segura ativada.');
    if (toggleBtn) toggleBtn.style.display = 'none';
    if (progressLine) progressLine.style.display = 'none';
    return;
  }

  let currentIndex = 0;
  let isPaused = false;
  let isHoveredBar = false;
  let timer = null;
  let startTime = 0;
  let remainingTime = SCENE_DURATION;

  const captions = [
    '01 · A doutora',
    '02 · A chegada',
    '03 · O consultório'
  ];

  // 1. Carregamento sob demanda (Idle/Load com fallback de 3s)
  function loadDeferredScenes() {
    slides.slice(1).forEach((slide, idx) => {
      const picture = slide.querySelector('picture');
      if (!picture) return;

      const sources = picture.querySelectorAll('source[data-srcset]');
      sources.forEach((s) => {
        s.setAttribute('srcset', s.getAttribute('data-srcset'));
        s.removeAttribute('data-srcset');
      });

      const img = picture.querySelector('img[data-src]');
      if (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
        img.addEventListener('load', () => {
          logDebug(`Cena ${idx + 2} carregada com sucesso.`);
        }, { once: true });
      }
    });
  }

  if (document.readyState === 'complete') {
    loadDeferredScenes();
  } else {
    window.addEventListener('load', loadDeferredScenes, { once: true });
    setTimeout(loadDeferredScenes, 3000);
  }

  // 2. Animação da barra de progresso
  function startProgressBar(duration) {
    if (!progressLine) return;
    progressLine.style.transition = 'none';
    progressLine.style.transform = 'scaleX(0)';
    void progressLine.offsetWidth; // Força reflow
    progressLine.style.transition = `transform ${duration}ms linear`;
    progressLine.style.transform = 'scaleX(1)';
  }

  function pauseProgressBar() {
    if (!progressLine) return;
    const computedTransform = window.getComputedStyle(progressLine).transform;
    progressLine.style.transition = 'none';
    progressLine.style.transform = computedTransform;
  }

  // 3. Verificação de prontidão da imagem da cena
  function isSlideReady(slide) {
    const img = slide.querySelector('img');
    if (!img) return true;
    return img.complete && img.naturalWidth > 0;
  }

  // 4. Troca de Cena
  function goToScene(nextIndex) {
    if (nextIndex === currentIndex) return;

    if (!isSlideReady(slides[nextIndex])) {
      logDebug(`Cena ${nextIndex + 1} ainda não pronta. Tentando próxima disponível.`);
      let fallbackIndex = (nextIndex + 1) % slides.length;
      let attempts = 0;
      while (!isSlideReady(slides[fallbackIndex]) && attempts < slides.length) {
        fallbackIndex = (fallbackIndex + 1) % slides.length;
        attempts++;
      }
      if (!isSlideReady(slides[fallbackIndex])) {
        logDebug('Nenhuma outra cena pronta no momento. Mantendo cena atual.');
        remainingTime = SCENE_DURATION;
        startTimer();
        return;
      }
      nextIndex = fallbackIndex;
    }

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    logDebug(`Trocando cena: ${currentIndex + 1} -> ${nextIndex + 1} (${captions[nextIndex]})`);

    currentSlide.classList.add('is-transitioning');
    nextSlide.classList.add('is-transitioning');

    // Desativa cena anterior
    currentSlide.classList.remove('hero__slide--active');
    currentSlide.classList.add('hero__slide--leaving');

    // Ativa próxima cena
    nextSlide.classList.add('hero__slide--active');
    nextSlide.classList.remove('hero__slide--leaving');

    // Sincroniza blocos editoriais de texto com a cena ativa
    contentBlocks.forEach((block) => {
      const blockScene = parseInt(block.getAttribute('data-scene-content'), 10) - 1;
      const cta = block.querySelector('.hero__actions a');
      if (blockScene === nextIndex) {
        block.classList.add('is-active');
        block.removeAttribute('aria-hidden');
        if (cta) cta.removeAttribute('tabindex');
      } else {
        block.classList.remove('is-active');
        block.setAttribute('aria-hidden', 'true');
        if (cta) cta.setAttribute('tabindex', '-1');
      }
    });

    // Atualiza legenda com fade
    if (labelEl) {
      labelEl.classList.remove('is-active');
      setTimeout(() => {
        labelEl.textContent = captions[nextIndex];
        labelEl.classList.add('is-active');
      }, 250);
    }

    currentIndex = nextIndex;

    // Remove classes transitórias após 1.3s
    setTimeout(() => {
      currentSlide.classList.remove('is-transitioning', 'hero__slide--leaving');
      nextSlide.classList.remove('is-transitioning');
    }, TRANSITION_DURATION + 100);

    // Reinicia contagem
    remainingTime = SCENE_DURATION;
    startTimer();
  }

  function nextScene() {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToScene(nextIndex);
  }

  // 5. Temporizador com suporte a pausa/retomada precisa
  function startTimer() {
    clearTimeout(timer);
    startTime = Date.now();
    startProgressBar(remainingTime);

    timer = setTimeout(() => {
      if (!isPaused && !isHoveredBar && document.visibilityState === 'visible') {
        nextScene();
      }
    }, remainingTime);
  }

  function pauseTimer() {
    clearTimeout(timer);
    pauseProgressBar();
    const elapsed = Date.now() - startTime;
    remainingTime = Math.max(0, remainingTime - elapsed);
  }

  function resumeTimer() {
    if (remainingTime <= 0) {
      remainingTime = SCENE_DURATION;
    }
    startTimer();
  }

  // 6. Botão de Pausar / Retomar
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isPaused = !isPaused;
      logDebug(`Botão de pausa clicado. isPaused = ${isPaused}`);
      if (isPaused) {
        pauseTimer();
        toggleBtn.setAttribute('aria-label', 'Retomar transição automática de cenas');
        toggleBtn.setAttribute('title', 'Retomar cenas');
        if (toggleIconPlay) toggleIconPlay.style.display = 'block';
        if (toggleIconPause) toggleIconPause.style.display = 'none';
      } else {
        if (toggleIconPlay) toggleIconPlay.style.display = 'none';
        if (toggleIconPause) toggleIconPause.style.display = 'block';
        toggleBtn.setAttribute('aria-label', 'Pausar transição automática de cenas');
        toggleBtn.setAttribute('title', 'Pausar cenas');
        resumeTimer();
      }
    });
  }

  // 7. Pausa pontual: SOMENTE na barra de controle da cena
  if (sceneBar) {
    sceneBar.addEventListener('mouseenter', () => {
      isHoveredBar = true;
      if (!isPaused) pauseTimer();
    });

    sceneBar.addEventListener('mouseleave', () => {
      isHoveredBar = false;
      if (!isPaused) resumeTimer();
    });

    sceneBar.addEventListener('focusin', () => {
      isHoveredBar = true;
      if (!isPaused) pauseTimer();
    });

    sceneBar.addEventListener('focusout', () => {
      isHoveredBar = false;
      if (!isPaused) resumeTimer();
    });
  }

  // 8. Pausa quando a aba entra em segundo plano (visibilitychange)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      pauseTimer();
    } else {
      if (!isPaused && !isHoveredBar) {
        resumeTimer();
      }
    }
  });

  // Inicia o ciclo imediatamente
  startTimer();
  logDebug('Ciclo iniciado com sucesso (duração: 4s)');
}


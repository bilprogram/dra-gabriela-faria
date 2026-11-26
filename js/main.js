/**
 * MAIN ENTRY SCRIPT: Odontologia Dra. Gabriela Faria
 * Inicialização dos utilitários de interface, motion, header, hero parallax e sequência de 3 cenas
 */

import { initReveal } from './reveal.js';
import { initHeader } from './header.js?v=3';
import { initHero } from './hero.js';
import { initHeroScenes } from './hero-scenes.js?v=2';
import { initCuidadosCarousel } from './cuidados.js';
import { initServicosJornada } from './servicos.js';
import { initDuvidas } from './duvidas.js?v=4';

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeader();
  initHero();
  initHeroScenes();
  initCuidadosCarousel();
  initServicosJornada();
  initDuvidas();

  // Atualização dinâmica do ano de copyright no rodapé
  const copyYearEl = document.querySelector('[data-ano-copyright]');
  if (copyYearEl) {
    copyYearEl.textContent = new Date().getFullYear();
  }
});

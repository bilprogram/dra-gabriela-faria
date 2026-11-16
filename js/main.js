/**
 * MAIN ENTRY SCRIPT: Odontologia Dra. Gabriela Faria
 * Inicialização dos utilitários de interface, motion, header, hero parallax e sequência de 3 cenas
 */

import { initReveal } from './reveal.js';
import { initHeader } from './header.js';
import { initHero } from './hero.js';
import { initHeroScenes } from './hero-scenes.js';
import { initCuidadosCarousel } from './cuidados.js';
import { initServicosJornada } from './servicos.js';

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeader();
  initHero();
  initHeroScenes();
  initCuidadosCarousel();
  initServicosJornada();
});

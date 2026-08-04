/* ==========================================================================
   CAROUSEL.JS
   Carrossel automático de depoimentos. Troca de slide a cada intervalo,
   com dots de navegação e pausa suave quando o mouse está sobre a área.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.getElementById('carouselSlides');
  const dotsContainer = document.getElementById('carouselDots');
  const carousel = document.getElementById('carousel');
  if (!slidesContainer || !dotsContainer) return;

  const slides = Array.from(slidesContainer.children);
  const INTERVALO = 6000; // ms entre trocas automáticas
  let indiceAtual = 0;
  let timer = null;

  // Monta os dots dinamicamente
  slides.forEach((_, indice) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Ir para depoimento ${indice + 1}`);
    if (indice === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => irPara(indice));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function irPara(indice) {
    indiceAtual = indice;
    slidesContainer.style.transform = `translateX(-${indice * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === indice));
  }

  function proximo() {
    irPara((indiceAtual + 1) % slides.length);
  }

  function iniciarAutoplay() {
    pararAutoplay();
    timer = setInterval(proximo, INTERVALO);
  }

  function pararAutoplay() {
    if (timer) clearInterval(timer);
  }

  iniciarAutoplay();

  // Pausa a rotação automática quando o usuário interage com a área
  carousel.addEventListener('mouseenter', pararAutoplay);
  carousel.addEventListener('mouseleave', iniciarAutoplay);
  carousel.addEventListener('focusin', pararAutoplay);
  carousel.addEventListener('focusout', iniciarAutoplay);
});

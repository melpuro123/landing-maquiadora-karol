/* ==========================================================================
   ANIMATIONS.JS
   Scroll Reveal via Intersection Observer — animações ao entrar na viewport.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const elementosReveal = document.querySelectorAll('[data-reveal]');

  if (!elementosReveal.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elementosReveal.forEach((el) => observer.observe(el));
  } else {
    // Fallback: navegadores antigos exibem o conteúdo sem animação
    elementosReveal.forEach((el) => el.classList.add('is-visible'));
  }
});

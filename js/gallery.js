/* ==========================================================================
   GALLERY.JS
   Portfólio masonry: renderiza imagens estáticas a partir de portfolio-data.js.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  renderPortfolio(grid);
});

function renderPortfolio(grid) {
  if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.length) return;

  grid.innerHTML = '';

  PORTFOLIO_DATA.forEach((item, indice) => {
    const figure = document.createElement('figure');
    figure.className = `portfolio__item portfolio__item--${item.size}${item.harmonize ? ' portfolio__item--harmonize' : ''}`;
    figure.setAttribute('data-reveal', 'up');
    figure.style.setProperty('--stagger', indice);
    figure.setAttribute('role', 'listitem');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.width = item.width;
    img.height = item.height;
    img.loading = 'lazy';
    if (item.harmonize) img.setAttribute('data-harmonize', '');

    figure.appendChild(img);
    grid.appendChild(figure);
  });

  const reveals = grid.querySelectorAll('[data-reveal]');

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
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }
}

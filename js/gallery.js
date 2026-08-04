/* ==========================================================================
   GALLERY.JS
   Lightbox do portfólio: abre a imagem em destaque, permite navegar
   entre fotos e fecha por clique, tecla ESC ou setas do teclado.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const itens = Array.from(document.querySelectorAll('.portfolio__item'));
  if (!itens.length) return;

  const lightbox = document.getElementById('lightbox');
  const imagemLightbox = document.getElementById('lightboxImage');
  const btnFechar = document.getElementById('lightboxClose');
  const btnAnterior = document.getElementById('lightboxPrev');
  const btnProxima = document.getElementById('lightboxNext');

  let indiceAtual = 0;

  function abrirLightbox(indice) {
    indiceAtual = indice;
    const img = itens[indice].querySelector('img');
    imagemLightbox.src = img.src;
    imagemLightbox.alt = img.alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function fecharLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function irPara(delta) {
    indiceAtual = (indiceAtual + delta + itens.length) % itens.length;
    abrirLightbox(indiceAtual);
  }

  itens.forEach((item, indice) => {
    item.addEventListener('click', () => abrirLightbox(indice));
  });

  btnFechar.addEventListener('click', fecharLightbox);
  btnAnterior.addEventListener('click', () => irPara(-1));
  btnProxima.addEventListener('click', () => irPara(1));

  // Fecha ao clicar fora da imagem
  lightbox.addEventListener('click', (evento) => {
    if (evento.target === lightbox) fecharLightbox();
  });

  // Navegação por teclado
  document.addEventListener('keydown', (evento) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (evento.key === 'Escape') fecharLightbox();
    if (evento.key === 'ArrowLeft') irPara(-1);
    if (evento.key === 'ArrowRight') irPara(1);
  });
});

/* ==========================================================================
   HERO.JS
   Inicializa vídeo ou imagem de fundo conforme SITE_CONFIG.hero.mediaType.
   Fallback automático para imagem se o vídeo não carregar.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof SITE_CONFIG === 'undefined') return;
  initHero();
});

function initHero() {
  const { hero } = SITE_CONFIG;
  const video = document.getElementById('heroVideo');
  const image = document.getElementById('heroImage');
  const source = video?.querySelector('source');

  if (!video || !image || !source) return;

  // Respeita preferência por menos movimento — exibe imagem estática
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ativarImagem(image, video, hero);
    return;
  }

  if (hero.mediaType === 'video') {
    ativarVideo(video, image, source, hero);
  } else {
    ativarImagem(image, video, hero);
  }
}

/* ---------- Modo vídeo ---------- */
function ativarVideo(video, image, source, hero) {
  source.src = hero.video.src;
  video.poster = hero.video.poster || hero.image.src;
  video.removeAttribute('hidden');
  image.setAttribute('hidden', '');

  video.load();

  video.addEventListener('error', () => ativarImagem(image, video, hero));

  video.addEventListener('loadeddata', () => {
    video.play().catch(() => ativarImagem(image, video, hero));
  });

  video.play().catch(() => ativarImagem(image, video, hero));
}

/* ---------- Modo imagem (estático ou fallback) ---------- */
function ativarImagem(image, video, hero) {
  image.src = hero.image.src;
  image.alt = hero.image.alt;
  image.width = hero.image.width;
  image.height = hero.image.height;
  image.removeAttribute('hidden');
  video.setAttribute('hidden', '');
  video.pause();
}

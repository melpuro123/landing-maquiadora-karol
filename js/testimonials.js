/* ==========================================================================
   TESTIMONIALS.JS
   Renderiza conversas WhatsApp estáticas a partir de testimonials-data.js.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('testimonialsGrid');

  if (!grid || typeof TESTIMONIALS_DATA === 'undefined') return;

  grid.innerHTML = TESTIMONIALS_DATA.map(renderChat).join('');

  const cards = Array.from(grid.children);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach((card) => observer.observe(card));
});

/* ---------- Renderização ---------- */

function renderMensagem(msg, posicao) {
  const isMaquiadora = msg.tipo === 'maquiadora';
  const status = isMaquiadora && msg.lida
    ? '<span class="msg__status" aria-label="Lida">✓✓</span>'
    : '';

  const meta = `<span class="msg__meta"><span class="msg__time">${msg.hora}</span>${status}</span>`;

  return `
    <div class="msg msg--${msg.tipo} msg--${posicao}">
      <span class="msg__text">${msg.texto}</span>${meta}
    </div>`;
}

function renderMensagens(mensagens) {
  let html = '';
  let i = 0;

  while (i < mensagens.length) {
    const tipo = mensagens[i].tipo;
    let j = i;

    while (j < mensagens.length && mensagens[j].tipo === tipo) j += 1;

    const grupo = mensagens.slice(i, j);
    html += `<div class="msg-group msg-group--${tipo}">`;

    grupo.forEach((msg, idx) => {
      let posicao = 'middle';
      if (grupo.length === 1) posicao = 'single';
      else if (idx === 0) posicao = 'first';
      else if (idx === grupo.length - 1) posicao = 'last';

      html += renderMensagem(msg, posicao);
    });

    html += '</div>';
    i = j;
  }

  return html;
}

function renderChat(conversa, index) {
  const dataLabel = conversa.dataLabel
    ? `<div class="chat-date"><span>${conversa.dataLabel}</span></div>`
    : '';

  const mensagens = renderMensagens(conversa.mensagens);

  return `
    <article class="whatsapp-chat" data-index="${index}" aria-label="Conversa com ${conversa.nome}">
      <header class="chat-header">
        <img class="chat-header__avatar" src="${conversa.foto}" alt="Foto de ${conversa.nome}" loading="lazy" width="40" height="40">
        <div class="chat-header__info">
          <span class="chat-header__name">${conversa.nome}</span>
          <span class="chat-header__status">online</span>
        </div>
      </header>
      <div class="chat-body">
        ${dataLabel}
        ${mensagens}
      </div>
    </article>`;
}

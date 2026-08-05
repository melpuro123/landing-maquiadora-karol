/* ==========================================================================
   WHATSAPP.JS
   Constrói e aplica links do WhatsApp a partir de config.js.
   ========================================================================== */

function montarLinkWhatsapp() {
  const { phone, whatsapp } = SITE_CONFIG;
  const texto = encodeURIComponent(whatsapp.message);
  return `https://wa.me/${phone.whatsapp}?text=${texto}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const link = montarLinkWhatsapp();

  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    el.setAttribute('href', link);
  });

  /* Botões sem ícone de link externo — abre WhatsApp no clique */
  document.querySelectorAll('[data-whatsapp-silent]').forEach((el) => {
    el.setAttribute('href', '#');
    el.addEventListener('click', (evento) => {
      evento.preventDefault();
      window.open(link, '_blank', 'noopener,noreferrer');
    });
  });
});

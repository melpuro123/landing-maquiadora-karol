/* ==========================================================================
   WHATSAPP.JS
   Configuração central do WhatsApp. Edite apenas os valores abaixo —
   todos os botões da página (hero, CTA, rodapé, botão flutuante) usam
   esta mesma configuração automaticamente.
   ========================================================================== */

const WHATSAPP_CONFIG = {
  // Número no formato internacional, apenas dígitos (com DDI 55 + DDD + número)
  numero: '5500000000000',

  // Mensagem padrão enviada automaticamente ao clicar em qualquer botão de WhatsApp
  mensagem: 'Olá! Vi seu site e gostaria de agendar um horário para maquiagem.',
};

function montarLinkWhatsapp() {
  const texto = encodeURIComponent(WHATSAPP_CONFIG.mensagem);
  return `https://wa.me/${WHATSAPP_CONFIG.numero}?text=${texto}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const link = montarLinkWhatsapp();
  const alvos = [
    'whatsappHero',
    'whatsappCta',
    'whatsappFooter',
    'whatsappFloat',
  ];

  alvos.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', link);
  });
});

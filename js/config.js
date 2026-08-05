/* ==========================================================================
   CONFIG.JS
   Única fonte de verdade para dados que mudam de cliente para cliente.
   Para um novo cliente: edite apenas este arquivo, variables.css e assets/.
   ========================================================================== */

const SITE_CONFIG = {

  /* ---- Identidade ---- */
  businessName: 'Karol Maquiagem',
  brandName: 'Karol',
  tagline: 'Maquiagem social e noiva civil com delicadeza, técnica e atendimento personalizado.',

  /* ---- Domínio e URLs ---- */
  domain: 'https://www.seudominio.com.br',
  canonicalUrl: 'https://www.seudominio.com.br/',

  /* ---- SEO ---- */
  seo: {
    title: 'Karol Maquiagem | Maquiagem Social & Noiva Civil em Sua Cidade',
    description: 'Maquiagem social e para noivas civis, criada para valorizar sua beleza natural. Atendimento personalizado, produtos profissionais e acabamento impecável.',
    keywords: 'maquiadora, maquiagem social, noiva civil, maquiagem para noivas, maquiadora profissional',
    author: 'Karol',
    ogTitle: 'Karol Maquiagem | Maquiagem Social & Noiva Civil',
    ogDescription: 'Maquiagem social e para noivas civis, criada para valorizar sua beleza natural em momentos especiais.',
    twitterTitle: 'Karol Maquiagem',
    twitterDescription: 'Maquiagem social e para noivas civis, criada para valorizar sua beleza natural.',
  },

  /* ---- Contato ---- */
  phone: {
    display: '+55 00 00000-0000',
    whatsapp: '5500000000000', // DDI + DDD + número, apenas dígitos
  },
  email: 'contato@seudominio.com.br',

  /* ---- WhatsApp ---- */
  whatsapp: {
    message: 'Olá! Vi seu site e gostaria de agendar um horário para maquiagem.',
  },

  /* ---- Endereço ---- */
  address: {
    city: 'Sua Cidade',
    state: 'UF',
    full: 'Sua Cidade, UF',
  },

  /* ---- Horário de atendimento ---- */
  schedule: {
    days: 'Segunda a sábado',
    hours: '09h às 19h',
    schema: 'Mo-Sa 09:00-19:00',
  },

  /* ---- Redes sociais ---- */
  social: {
    instagram: 'https://www.instagram.com/seuinstagram',
  },

  /* ---- Schema.org ---- */
  schema: {
    type: 'BeautySalon',
    description: 'Maquiagem social e para noivas civis, com atendimento personalizado e acabamento natural.',
    priceRange: '$$',
    image: 'assets/hero/hero.jpg',
  },

  /* ---- Hero ---- */
  hero: {
    // 'video' ou 'image' — altere aqui para trocar o fundo da Hero
    mediaType: 'video',

    image: {
      src: 'assets/hero/hero.jpg',
      alt: 'Maquiagem social delicada, iluminação suave',
      width: 1920,
      height: 1080,
    },

    video: {
      src: 'assets/videos/hero.mp4',
      poster: 'assets/hero/hero.jpg', // poster + fallback se o vídeo falhar
    },
  },

  /* ---- Rodapé ---- */
  footer: {
    credit: 'Desenvolvido com delicadeza.',
  },
};

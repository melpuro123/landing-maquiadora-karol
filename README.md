# Landing Page Template — Premium Beauty

Site estático premium para profissionais de beleza (maquiagem, estética, etc.). HTML, CSS e JavaScript puros — sem frameworks, pronto para reutilização em dezenas de clientes.

**Cliente atual:** Karol Maquiagem  
**Pasta:** `maquiadora karol`

---

## Como visualizar

1. Abra esta pasta no Cursor/VS Code.
2. Com a extensão **Live Server**: botão direito em `index.html` → *Open with Live Server*.
3. Ou sirva a pasta com qualquer host estático (Netlify, Vercel, GitHub Pages, etc.).

---

## Estrutura do projeto

```
maquiadora karol/
├── index.html              → HTML semântico por seções
├── css/
│   ├── variables.css       → Cores, tipografia, espaçamentos, z-index
│   ├── reset.css           → Reset e prefers-reduced-motion
│   ├── style.css           → Layout de cada seção
│   ├── animations.css      → Animações e keyframes
│   ├── responsive.css      → Media queries por breakpoint
│   ├── testimonials.css    → Carrossel WhatsApp (cores oficiais preservadas)
│   └── gallery-feed.css    → Galeria premium (masonry + marquee)
├── js/
│   ├── config.js           → ★ Dados do cliente (única fonte de verdade)
│   ├── seo.js              → Meta tags, OG, Twitter, Schema.org
│   ├── main.js             → Header, menu mobile, back-to-top, hero
│   ├── whatsapp.js         → Links do WhatsApp
│   ├── animations.js       → Scroll reveal (Intersection Observer)
│   ├── gallery.js          → Lightbox do portfólio
│   ├── gallery-feed-data.js  → ★ Imagens da galeria premium (array editável)
│   ├── gallery-feed.js       → Masonry, marquee infinito e lightbox da galeria
│   └── testimonials.js       → Carrossel de depoimentos WhatsApp
├── assets/                 → Imagens organizadas por seção
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

---

## Trocar de cliente — checklist

Para adaptar este template a um novo cliente, edite **apenas**:

| Arquivo | O que alterar |
|---|---|
| `js/config.js` | Nome, telefone, WhatsApp, endereço, Instagram, SEO, domínio, hero |
| `css/variables.css` | Paleta de cores, fontes, identidade visual |
| `assets/` | Imagens e vídeos reais |
| `index.html` | Textos das seções (sobre, serviços, depoimentos, portfólio) |
| `robots.txt` / `sitemap.xml` | Domínio (deve corresponder a `config.js`) |

Nenhuma alteração estrutural é necessária.

---

## config.js — campos principais

```js
SITE_CONFIG = {
  businessName: '...',      // Nome completo do negócio
  brandName: '...',         // Nome curto (logo)
  domain: 'https://...',    // Domínio do site
  phone: { whatsapp: '...' },
  whatsapp: { message: '...' },
  address: { city, state, full },
  social: { instagram: '...' },
  hero: {
    mediaType: 'image',     // 'image' ou 'video'
    image: { src, alt, width, height },
    video: { src, poster },
  },
  seo: { title, description, ... },
}
```

Elementos HTML com `data-config="..."` e `data-whatsapp` são preenchidos automaticamente.

---

## Hero — imagem ou vídeo

Em `config.js`, defina `hero.mediaType`:

- `'image'` — exibe a imagem configurada em `hero.image`
- `'video'` — exibe vídeo com autoplay, muted, loop, playsinline e overlay escuro

Coloque o arquivo de vídeo em `assets/hero/hero.mp4` e o poster em `assets/hero/hero-poster.jpg`.

---

## Imagens esperadas

| Pasta | Arquivos | Proporção |
|---|---|---|
| `assets/hero/` | `hero.jpg` ou `hero.mp4` + `hero-poster.jpg` | 1920×1080 |
| `assets/sobre/` | `sobre.jpg` | 4:5 |
| `assets/servicos/` | `servico-1.jpg` … `servico-3.jpg` | 4:5 |
| `assets/portfolio/` | `portfolio-1.jpg` … `portfolio-8.jpg` | livre |
| `assets/images/gallery/` | `gallery-01.jpg` … `gallery-08.jpg` | livre (fallback: portfólio) |
| `assets/depoimentos/` | `cliente-1.jpg` … `cliente-3.jpg` | 1:1 |
| `assets/favicon/` | `favicon.png` | 256×256 |

---

## Identidade visual

- Paleta **fashionista** em `css/variables.css`: rosa principal (`--primary`), fundo `--background`, texto `--text`.
- Dourado (`--color-gold`) **somente em detalhes**: eyebrow, divisores, ícones, hovers sutis — nunca em botões principais.
- Fontes: Cormorant Garamond, Playfair Display (itálico), Lato.

## Galeria premium

Adicione fotos em `assets/images/gallery/` (`gallery-01.jpg` … `gallery-08.jpg`) e/ou edite o array em `js/gallery-feed-data.js`:

```js
{ src: 'assets/images/gallery/gallery-09.jpg', fallback: '...', alt: '...', width: 600, height: 800, size: 'tall' }
```

Tamanhos: `'tall'` (2 linhas), `'wide'` (2 colunas), `'normal'`. Se a imagem não existir, o fallback do portfólio é usado automaticamente.

---

## Performance e acessibilidade

- Lazy loading em imagens abaixo da dobra
- Preload da imagem hero
- `width` e `height` em todas as imagens
- Skip link, aria-labels, foco visível, HTML semântico
- Animações respeitam `prefers-reduced-motion`
- Scripts com `defer` — não bloqueiam renderização
- Comprima fotos finais (WebP recomendado, < 200KB portfólio, < 400KB hero)

---

## Seções da landing

HEADER → HERO → ABOUT → SERVICES → EXPERIENCE → PORTFOLIO → TESTIMONIALS → GALLERY → CTA → FOOTER

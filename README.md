# Landing Page — Karol Maquiagem

Site estático **independe** — maquiagem social e noiva civil. HTML, CSS e JavaScript puros, sem vínculo com outros projetos ou sistemas de agenda.

**Cliente:** Karol  
**Pasta:** `maquiadora karol`

## Como visualizar

1. Abra esta pasta no Cursor/VS Code.
2. Com a extensão **Live Server**: botão direito em `index.html` → *Open with Live Server*.
3. Ou sirva a pasta com qualquer host estático (Netlify, Vercel, GitHub Pages, etc.).

## Estrutura

```
maquiadora karol/
├── index.html
├── css/          → variables.css, style.css, animations.css
├── js/           → whatsapp.js, main.js, gallery.js, carousel.js
├── assets/       → imagens por seção (hero, sobre, serviços, portfólio…)
├── robots.txt
└── sitemap.xml
```

## O que editar primeiro

1. **`index.html`** — busque `Karol` / placeholders de cidade, textos e SEO.
2. **`js/whatsapp.js`** — número (`55DDXXXXXXXXX`) e mensagem padrão.
3. **`assets/`** — fotos reais (ver tabela abaixo).
4. **Rodapé e schema.org** — endereço, horário, Instagram.

## Imagens esperadas

| Pasta | Arquivos | Proporção |
|---|---|---|
| `assets/hero/` | `hero.jpg` | 1920×1080 |
| `assets/sobre/` | `sobre.jpg` | 4:5 |
| `assets/servicos/` | `servico-1.jpg` … `servico-3.jpg` | 4:5 |
| `assets/portfolio/` | `portfolio-1.jpg` … `portfolio-8.jpg` | livre |
| `assets/depoimentos/` | `cliente-1.jpg` … `cliente-3.jpg` | 1:1 |
| `assets/favicon/` | `favicon.png` | 256×256 |

## Identidade visual

- Rosé como cor principal; dourado (`--color-gold`) só em detalhes.
- Fontes: Cormorant Garamond, Playfair Display (itálico), Lato.
- Cores centralizadas em `css/variables.css`.

---

Conteúdo original e direção de arte descritos abaixo.


- **Estética:** editorial beauty minimalism — inspirada em revistas de moda e marcas como Dior Beauty, Chanel Beauty e Charlotte Tilbury.
- **Cor:** o rosé domina 100% da identidade (fundos, texto de destaque, botões). O dourado (`--color-gold`) aparece **só** em detalhes: linhas finas, ícones, bordas em hover.
- **Tipografia:** `Cormorant Garamond` para títulos (grande, leve, elegante), `Playfair Display` itálico para subtítulos/citações, `Lato` para textos corridos.
- **Assinatura visual:** a moldura dourada sutil atrás da foto "Sobre", o indicador de scroll vertical no hero e o divisor dourado que aparece nos títulos de seção — pequenos detalhes recorrentes que amarram a identidade sem exagero.

## Como abrir no VS Code

1. Abra a pasta `maquiadora-landing-page/` no VS Code.
2. Instale a extensão **Live Server** (opcional, mas recomendado).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

## Estrutura de pastas

```
maquiadora-landing-page/
├── index.html          → todo o conteúdo e textos da página
├── css/
│   ├── variables.css    → TODAS as cores, fontes e espaçamentos (edite aqui primeiro)
│   ├── style.css        → layout e estilo de cada seção
│   └── animations.css   → fades, slides e reveals ao rolar
├── js/
│   ├── whatsapp.js       → número e mensagem do WhatsApp (edite aqui)
│   ├── main.js           → header, menu mobile, scroll reveal
│   ├── gallery.js         → lightbox do portfólio
│   └── carousel.js        → carrossel de depoimentos
├── assets/               → imagens organizadas por seção (ver abaixo)
├── fonts/                 → reservado caso queira hospedar as fontes localmente
├── robots.txt / sitemap.xml → SEO técnico
└── favicon.ico
```

## O que você precisa substituir

As imagens atuais em `assets/` são **placeholders gerados automaticamente** na paleta da marca, apenas para você visualizar o layout funcionando. Substitua pelos arquivos reais mantendo os mesmos nomes (ou ajuste os caminhos no `index.html`):

| Pasta | Arquivo(s) esperado(s) | Proporção sugerida |
|---|---|---|
| `assets/hero/` | `hero.jpg` | 1920×1080 (paisagem, tela cheia) |
| `assets/sobre/` | `sobre.jpg` | 4:5 (retrato) |
| `assets/servicos/` | `servico-1.jpg`, `servico-2.jpg`, `servico-3.jpg` | 4:5 |
| `assets/portfolio/` | `portfolio-1.jpg` … `portfolio-8.jpg` | livre (galeria estilo Pinterest) |
| `assets/depoimentos/` | `cliente-1.jpg` … `cliente-3.jpg` | 1:1 (quadrada, avatar) |
| `assets/logo/` | `logo.png` | fundo transparente |
| `assets/favicon/` | `favicon.png` | 256×256 |

## O que você precisa editar

1. **Nome e marca:** busque por `Nome Sobrenome` no `index.html` e substitua pelo nome real.
2. **WhatsApp:** abra `js/whatsapp.js` e edite `numero` (formato `55DDXXXXXXXXX`) e a `mensagem` padrão. Todos os botões da página (hero, CTA, rodapé, botão flutuante) usam essa mesma configuração.
3. **Endereço, cidade e horário:** seção de rodapé (`<footer>`) e o bloco `schema.org` no `<head>` do `index.html`.
4. **Instagram:** link no rodapé (`.footer__social`).
5. **Domínio real:** substitua `seudominio.com.br` nas tags de SEO (`<title>`, `og:url`, `canonical`, `sitemap.xml`, `robots.txt`).
6. **Depoimentos e portfólio:** textos e fotos ficam diretamente no `index.html`, dentro das seções `#avaliacoes` e `#portfolio`.

## Cores centralizadas

Todas as cores usadas na página vêm de variáveis CSS definidas em `css/variables.css`. Para trocar qualquer tom (por exemplo, deixar o rosé mais escuro), edite apenas o valor da variável — o restante do site se atualiza automaticamente.

## Performance e acessibilidade

- Imagens abaixo da dobra usam `loading="lazy"`.
- Foco de teclado visível em todos os elementos interativos.
- Animações respeitam `prefers-reduced-motion`.
- Estrutura semântica (`header`, `main`, `section`, `footer`) e textos alternativos em todas as imagens.
- Sem frameworks pesados — CSS e JS puro carregam rápido por padrão. Para nota alta no PageSpeed, comprima as fotos finais (recomenda-se WebP, < 200KB para as de portfólio e < 400KB para a hero) antes de publicar.

# Odontologia Dra. Gabriela Faria

> Website oficial e institucional da clínica de odontopediatria humanizada da Dra. Gabriela Faria (CROSP 95.948), em São José do Rio Pardo – SP.

---

## 1. Visão Geral e Stack Tecnológica

O projeto foi construído com arquitetura web moderna, priorizando alta performance, acessibilidade (WAI-ARIA), semântica e SEO técnico, sem dependência de frameworks pesados:

- **HTML5 Semântico:** Estrutura clara, com único `<h1>` por página, atributos WAI-ARIA para acessibilidade e metadados Open Graph / Twitter Cards.
- **CSS3 Modular com Design Tokens:** Variáveis nativas (`css/tokens.css`), fontes auto-hospedadas (`css/fonts.css`), estilos base (`css/base.css`), componentes (`css/components.css`), animações GPU-accelerated (`css/motion.css`) e estilos de serviços (`css/servicos.css`).
- **JavaScript ES Modules:** Módulos nativos (`type="module"`), sem dependências externas em tempo de execução, com transições suaves via `IntersectionObserver` bidirecional e respeito estrito a `prefers-reduced-motion`.
- **Hospedagem Alvo:** [Cloudflare Pages](https://pages.cloudflare.com/) (Deploy estático com CDN global, HTTP/3, TLS automático e suporte nativo a `_headers` e `_redirects`).

---

## 2. Estrutura do Projeto

```text
├── index.html            # Página inicial canônica (Hero, Sobre, Cuidados, Serviços, FAQ, Contato)
├── servicos.html         # Página completa de serviços odontopediátricos
├── 404.html              # Página personalizada de erro 404 (acolhedora e institucional)
├── site.webmanifest      # Manifesto PWA com ícones oficiais e cores da marca
├── robots.txt            # Regras de rastreamento para buscadores e crawlers de IA
├── sitemap.xml           # Estrutura canônica de sitemap das rotas públicas
├── llms.txt              # Documento factual institucional para mecanismos de IA generativa
├── _headers              # Cabeçalhos de segurança e políticas de cache para Cloudflare Pages
├── _redirects            # Regras de redirecionamento limpo para Cloudflare Pages
├── .env.example          # Modelo de variáveis de ambiente (informativo)
├── .gitignore            # Exclusão de arquivos temporários, logs e caches de sistema
├── favicon.ico           # Favicon raiz legado
│
├── assets/
│   ├── favicon/          # Favicons e ícones PWA oficiais (SVG, 16px, 32px, 192px, 512px)
│   ├── fonts/            # Fontes self-hosted WOFF2 (Fraunces Display e Manrope Body)
│   ├── logo/             # Vetores SVG e PNGs de alta resolução (símbolo, horizontal, claro/escuro)
│   └── img/              # Acervo fotográfico otimizado da clínica (WebP, AVIF e JPEG original)
│
├── css/
│   ├── tokens.css        # Paleta de cores, tipografia, espaçamentos e raios
│   ├── fonts.css         # Declarações @font-face das fontes locais
│   ├── base.css          # Reset, elementos básicos, botões e utilitários
│   ├── components.css    # Cabeçalho com vidro fosco, cards, acordeão de FAQ e rodapé
│   ├── motion.css        # Animações de entrada e regras prefers-reduced-motion
│   └── servicos.css      # Layout editorial da página de serviços
│
├── js/
│   ├── main.js           # Ponto de entrada modular da página inicial
│   ├── header.js         # Comportamento dinâmico de vidro fosco no cabeçalho
│   ├── hero.js           # Parallax suave do hero
│   ├── hero-scenes.js    # Sequência de cenas da primeira dobra
│   ├── cuidados.js       # Carrossel interativo 3D da seção de cuidados
│   ├── servicos.js       # Timeline sticky com imagens sincronizadas da jornada
│   ├── duvidas.js        # Acordeão acessível (WAI-ARIA) da seção de perguntas frequentes
│   └── reveal.js         # IntersectionObserver para surgimento suave dos textos ao rolar
│
└── scripts/              # Scripts auxiliares de desenvolvimento e inspeção local
```

---

## 3. Execução Local

Como o site é 100% estático e utiliza ES Modules nativos, qualquer servidor HTTP local pode ser utilizado:

### Opção 1: Python (Nativo no macOS e Linux)
```bash
python3 -m http.server 3000
```
Acesse: [http://localhost:3000](http://localhost:3000)

### Opção 2: Node.js / npx
```bash
npx serve . -p 3000
```

---

## 4. Publicação no Cloudflare Pages

O projeto já está configurado e pronto para deploy contínuo via GitHub:

1. Acesse o painel do **Cloudflare Dashboard** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Selecione o repositório `dra-gabriela-faria`.
3. Preencha as configurações de build:
   - **Framework preset:** `None`
   - **Build command:** *(deixar em branco)*
   - **Build output directory:** `/` (ou `.`)
   - **Root directory:** `/` (ou `.`)
4. Clique em **Save and Deploy**.
5. O Cloudflare Pages gerará automaticamente uma URL provisória no formato `*.pages.dev` com HTTPS ativo.
6. Os arquivos `_headers` (cabeçalhos de segurança e cache) e `_redirects` serão aplicados de forma imediata.

---

## 5. Checklist Pós-Registro do Domínio no Registro.br

Após a aprovação da cliente e a compra do domínio oficial no **Registro.br**, realize as seguintes etapas para finalizar o lançamento:

1. **Configuração de DNS no Registro.br:**
   - Adicione o domínio ao Cloudflare Pages (**Custom domains** → **Set up a custom domain**).
   - No Registro.br, altere os servidores DNS para os nameservers fornecidos pela Cloudflare (ex.: `*.ns.cloudflare.com`).
2. **Atualização de URLs Canônicas:**
   - Em `index.html`: atualizar `<link rel="canonical" href="/" />` e `<meta property="og:url" content="/" />` para a URL definitiva (ex.: `https://seudominio.com.br/`).
   - Em `servicos.html`: atualizar `<link rel="canonical" href="./servicos.html" />` e `<meta property="og:url" content="./servicos.html" />` para `https://seudominio.com.br/servicos.html`.
3. **Ativação do Sitemap:**
   - Em `sitemap.xml`: descomentar os blocos `<url>` e substituir o placeholder `https://[DOMINIO_OFICIAL]` pela URL definitiva.
   - Em `robots.txt`: descomentar a linha `# Sitemap: https://[DOMINIO_OFICIAL]/sitemap.xml`.
4. **Verificação nos Mecanismos de Busca:**
   - Cadastrar e verificar a propriedade no **Google Search Console** e no **Bing Webmaster Tools**.
   - Enviar a URL do sitemap (`https://seudominio.com.br/sitemap.xml`).
5. **Validação de Previews Sociais:**
   - Testar o compartilhamento no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e no validador de Twitter Cards.

---

## 6. Dados Oficiais Confirmados da Clínica

- **Razão / Nome:** Odontologia Dra. Gabriela Faria
- **Responsável Técnica:** Dra. Gabriela Faria · CROSP 95.948
- **Endereço:** R. Pref. João Batista Moreira de Souza, 902, Jardim Aeroporto, São José do Rio Pardo, SP, CEP 13720-508
- **Telefone / WhatsApp:** (19) 99179-3019
- **Link de Atendimento:** `https://wa.me/5519991793019`
- **Instagram:** `@dragabrielafariaodontologia`
- **Facebook:** `/gabrielafaria.odontologia`


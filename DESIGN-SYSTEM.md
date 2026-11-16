# DESIGN SYSTEM: Odontologia Dra. Gabriela Faria

> Documentação canônica do Design System do projeto institucional da **Dra. Gabriela Faria**, consultório humanizado de odontopediatria em São José do Rio Pardo – SP.  
> Baseado estritamente nas diretrizes do documento [`DIRECAO-SITE.md`](file:///Users/fabianoignacio/Downloads/Site%20Dra%20Gabriela%20Faria/DIRECAO-SITE.md).

---

## 1. Princípios e Posicionamento Visual

- **Conceito:** "Boutique de cuidado" e luxo silencioso com autoridade clínica acolhedora.
- **Diferenciação clara:** Não é uma clínica hospitalar fria (azul e branca) e não é um parque temático infantil barulhento ou multicolorido.
- **Arquitetura modular:** Grandes painéis com cantos curvos (`--r-panel`), respiro generoso (`--pad-section-y: clamp(5rem, 10vw, 10rem)`) e motivos gráficos sutis inspirados nos arcos e nichos iluminados do consultório físico.

---

## 2. Paleta de Cores e Regras de Contraste WCAG AA

Extraída diretamente dos materiais físicos do consultório (letreiro em madeira quente, fachada com arcos pastel e salas em verde-sálvia) e do logotipo oficial:

| Token | Hex | Função e Aplicação | Contraste / Acessibilidade |
|---|---|---|---|
| `--creme` | `#FBF6F2` | Fundo principal da página (substitui o branco puro para suavidade visual). | Base neutra clara |
| `--areia` | `#F1E6DE` | Superfície alternada de painéis, fundo de cards e estados de hover secundários. | Fundo secundário quente |
| `--rosa-claro` | `#EBC4C0` | Detalhes, hover suave de links e extremidade inicial do gradiente de assinatura. | Apenas detalhe e fundo suave |
| `--rosa-queimado`| `#C4857E` | Elementos gráficos grandes, divisores e ícones decorativos. | **NÃO** usar para texto pequeno |
| `--rosa-profundo`| `#8E4F4A` | Botões de ação primária (CTA), links e títulos de destaque. | **~5,8:1** sobre `--creme` (Aprovado AA) |
| `--salvia` | `#A9B79A` | Fundos de seção temáticos, nichos e círculos gráficos decorativos. | Fundo tonal suave |
| `--salvia-profundo`| `#5E6E55` | Textos secundários destacados, ícones clínicos e anel de foco. | **~5:1** sobre `--creme` (Aprovado AA) |
| `--madeira` | `#8A6A4F` | Molduras, bordas e superfícies escuras quentes. | Fundo escuro alternativo |
| `--grafite` | `#2B2523` | Tipografia de leitura contínua e painel final de contraste. | **> 14:1** sobre `--creme` (Aprovado AAA) |
| `--cinza-metal` | `#8C8586` | Legendas grandes, traços finos e segunda cor do gradiente de assinatura. | Elementos estruturais |

### Regras Estritas de Contraste:
1. **Texto de leitura contínua (corpo):** Exclusivamente em `--grafite` (`#2B2523`) sobre fundos `--creme` ou `--areia`.
2. **Texto claro:** Apenas `--creme` sobre superfícies `--rosa-profundo`, `--madeira` ou `--grafite`.
3. **Gradiente de Assinatura Único:** Linear de `#EBC4C0` para `#8C8586` (idêntico ao símbolo do dente no logo). **Proibido** qualquer outro degradê decorativo no projeto.

---

## 3. Tipografia

A hierarquia tipográfica privilegia o refinamento editorial com fontes *self-hosted* (`font-display: swap`):

- **Display Serifada Escolhida: Fraunces Variable** (pesos 300 e 500, opsz 9..144).  
  *Justificativa da escolha:* Fraunces foi escolhida por suas curvas térmicas e elegantes com terminação orgânica que dialogam perfeitamente com o letreiro 3D em relevo sobre madeira do consultório, oferecendo versatilidade em eixo óptico e peso sem sobrecarregar requisições HTTP adicionais.
- **Corpo e Interface: Manrope Variable** (pesos 200 a 800) — sans geométrica com proporções abertas e legibilidade cristalina em telas móveis e desktop.
- **Eyebrow (Sobretítulo):** `0.75rem`, caixa alta, tracking expansivo `0.22em`, peso 600 (remete à inscrição "ODONTOLOGIA" no logo).
- **Assinatura:** Caligráfica manuscrita, restrita exclusivamente ao vetor do logo e à assinatura nominal da Dra. Gabriela na seção institucional.

### Escala Fluida (Viewport Clamp):
- `H1 Hero`: `clamp(2.75rem, 1.6rem + 5.5vw, 6.5rem)` — peso 300, line-height 1.02, tracking -0.02em.
- `H2 Seção`: `clamp(2rem, 1.3rem + 3vw, 3.75rem)` — line-height 1.1.
- `H3 Card / Subseção`: `clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem)` — line-height 1.25.
- `Corpo Principal`: `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` — line-height 1.65, comprimento máximo `62ch`.

---

## 4. Espaçamento, Grid e Formas

- **Escala Modular (Base 8):** `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `72px`, `112px`, `160px`.
- **Containers:** Largura máxima de `1360px`, margem automática, gutter de `24px` no desktop (12 colunas) e `16px` no mobile (4 colunas).
- **Paddings de Seção:** Fluido vertical `clamp(5rem, 10vw, 10rem)`.
- **Raios (`border-radius`):**
  - Campos de entrada: `4px`
  - Cards e módulos: `24px`
  - Painéis de fundo: `36px` (`24px` mobile)
  - Botões e tags: pílula completa `999px`
  - Recorte em arco: `180px 180px 0 0` (remetendo à fachada e nichos)
- **Sombras:** Apenas duas sombras puramente difusas sem bordas duras:
  - `--shadow-suave`: `0 10px 40px rgba(43, 37, 35, 0.08)`
  - `--shadow-elevada`: `0 24px 60px rgba(43, 37, 35, 0.14)`

---

## 5. Componentes de Interface

### Botões (.btn)
- **Primário (CTA):** Pílula em `--rosa-profundo`, texto em `--creme`, ícone oficial do WhatsApp em SVG, efeito de preenchimento deslizante em `--grafite` no hover.
- **Secundário:** Pílula vazada com contorno de `1px` em `--grafite`, preenchimento suave com `--areia` no hover.
- **Ergonomia e Acessibilidade:** Altura mínima de `52px`, área de toque mínima de `48px` e anel de foco visível com contorno de `3px solid var(--salvia-profundo)`.

### Cards e Blocos Editoriais
- Em vez de grades repetitivas idênticas, utiliza-se listas estruturadas com números, nomes, descrições e revelações contextuais, além de cards de cantos generosos (`24px`).

---

## 6. Assinatura de Movimento (6 Efeitos Consistentes)

Curva padrão: `cubic-bezier(0.22, 1, 0.36, 1)`, com durações ajustadas entre `0.7s` e `1.2s`:

1. `.reveal-lines`: Revelação de títulos por linhas mascaradas (o texto sobe fluidamente do recorte).
2. `.reveal-up`: Fade up (deslocamento vertical ascendente + opacidade) em parágrafos, botões e cards.
3. `.reveal-blur`: Desfoque decrescente (*blur-in*) com sutil deslocamento para imagens ao entrar em viewport.
4. `.marquee`: Faixa contínua infinita de texto (pausa automática em hover e em `prefers-reduced-motion`).
5. `Vídeo Sticky`: Fundo fixo com seções de conteúdo deslizando por cima na Dobra 2.
6. `Header Dinâmico`: Recolhe suavemente na rolagem descendente e reapresenta-se na rolagem ascendente.

> **Regra de Acessibilidade:** Em `prefers-reduced-motion: reduce`, todas as durações são reduzidas a `0.01ms` e efeitos de deslocamento são desativados.

---

## 7. Relação com a Pasta de Referência (`Dr. Henrique Salles`)

### O que foi aproveitado da referência:
- A disciplina e arquitetura dos arquivos: organização de tokens em `:root`, uso de variáveis com nomenclaturas semânticas e base 8.
- Sistema de tipografia fluida com fórmulas `clamp()` bem balanceadas.
- Padrão de container modular em painéis (`.paineis`, `.painel`) com espaçamento consistente (`--gap-panel`).
- Princípio de animações performáticas que alteram exclusivamente `transform` e `opacity` sem provocar repaints.

### O que foi deliberadamente evitado:
- **Cores e tons azuis:** A referência usa azul tecnológico/cirúrgico (`#1e6bff`, `#5ea2ff`); o projeto da Dra. Gabriela é acolhedor e humanizado com paleta quente (`#FBF6F2`, `#EBC4C0`, `#8E4F4A`, `#A9B79A`).
- **Cards idênticos em carrosséis genéricos:** Evitadas estruturas mecânicas; adotada a diagramação editorial da Seção 7.
- **Identidade e textos da referência:** Nenhuma imagem, texto, ícone médico ou logotipo do Dr. Henrique foi reaproveitado.
- **Gradientes cintilantes artificiais:** Eliminado o efeito *shine* contínuo de botão em favor de transições deslizantes com textura nobre.


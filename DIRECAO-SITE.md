# DIREÇÃO DO SITE: Odontologia Dra. Gabriela Faria

> Este arquivo é a fonte única de verdade do projeto. Leia inteiro antes de criar qualquer arquivo. Não busque referências fora dele. Em caso de dúvida, consulte este documento; se a resposta não estiver aqui, pergunte ao Fabiano antes de inventar.

## 1. Propósito e posicionamento

Site institucional premium, clean e acolhedor de uma clínica de odontopediatria humanizada em São José do Rio Pardo, SP.

- Diferenciais: primeira consulta do bebê, Ortopedia Funcional dos Maxilares (OFM), sedação consciente com óxido nitroso, laserterapia, frenectomia, atendimento a crianças com necessidades especiais, ambiente lúdico.
- Prova social real: nota 5,0 no Google com 105 avaliações (conferir o número atual antes de publicar).
- Público: pais e responsáveis (principalmente mães) de bebês, crianças e adolescentes, que pesquisam no celular, muitas vezes com medo de levar o filho ao dentista.
- Objetivo único: gerar contatos por WhatsApp. Todo o design serve a esse objetivo.
- Tom de voz: acolhedor, seguro, sofisticado e simples. Frases curtas, linguagem de mãe para mãe com autoridade clínica. Nunca infantilizado demais, nunca frio e técnico.
- Sensação desejada: "boutique de cuidado". Luxo silencioso, não clínica azul e branca, não festa infantil colorida.

## 2. Regras inegociáveis

1. Nunca inventar dados (CNPJ, depoimentos, números, prêmios, preços, antes e depois). Falta de dado vira o marcador [PENDENTE] e entra na lista da seção 13.
2. Proibido: gradiente roxo-azul padrão, cards idênticos em grade repetitiva, emojis como ícones, fontes do sistema, textos vagos como "soluções inovadoras", selos genéricos de stock.
3. Publicidade odontológica (CFO): sem "melhor", "garantido", "o único", sem promessa de resultado, sem preço promocional, sem antes e depois. Sempre exibir nome, CROSP e especialidade quando houver registro.
4. Logo e favicon: usar sempre versões novas e vetoriais (SVG) redesenhadas a partir da identidade das seções 4 e 5. Nenhuma logo antiga ou rasterizada no site.
5. Mobile first. Testar primeiro em 360 px de largura.
6. Publicação: apenas domínio próprio + GitHub. Não usar Vercel. Avisar o Antigravity de qualquer nova configuração de deploy.
7. Animar apenas transform e opacity. Respeitar prefers-reduced-motion em tudo.
8. NAP idêntico em site, rodapé, schema e Google: ver seção 3.

## 3. Dados do negócio (NAP oficial)

- Nome: Odontologia Dra. Gabriela Faria
- Profissional: Dra. Gabriela Faria, CROSP 95.948 (consta no logo; confirmar)
- Endereço: R. Pref. João Batista Moreira de Souza, 902, Jardim Aeroporto, São José do Rio Pardo, SP, CEP 13720-508
- Telefone e WhatsApp: (19) 99179-3019
- Link WhatsApp: https://wa.me/5519991793019
- Instagram: https://www.instagram.com/dragabrielafariaodontologia/
- Facebook: https://www.facebook.com/gabrielafaria.odontologia
- Horário: abre seg. às 08:30 [PENDENTE: horário completo de cada dia]
- E-mail, coordenadas, domínio, LinkedIn: [PENDENTE]

Atenção: nunca citar "Avenida Independência". O endereço correto é o acima.

## 4. Ativos visuais recebidos (pasta /assets/originais)

- Logo (fundo rosa claro): ícone de dente em traço dentro de um círculo aberto, gradiente rosa para cinza, "ODONTOLOGIA" em sans com espaçamento largo, assinatura manuscrita "Dra. Gabriela Faria" e CROSP 95.948.
- _MG_2775.jpg: letreiro 3D em rosa queimado sobre painel de madeira. Uso: textura de fundo e detalhe na seção de identidade. Rosa e madeira quente.
- _MG_2865.jpg: fachada branca e bege com arco de balões pastel e laço rosa. Uso: seção de localização e chegada.
- _MG_3214.jpg: a Dra. Gabriela com criança na cadeira, sala verde-sálvia com luz de fundo. Uso: imagem principal humana (hero ou seção 2).
- IMG20251127WA0276_2.jpg: segundo registro do ambiente. Uso: apoio.

Tratamento obrigatório:
- Imagens e Direitos: Remoção da marca d'água autorizada pelo cliente. Todas as imagens foram reenquadradas e recortadas na borda inferior, removendo integralmente a marca d'água de 100% dos arquivos do acervo e das versões web. [CONCLUÍDO]
- A criança aparece identificável: exigir autorização escrita do responsável. [PENDENTE]
- Converter para AVIF e WebP, srcset 768/1280/1920/2560, nomes de arquivo com SEO (ex.: dentista-infantil-sao-jose-do-rio-pardo-consultorio.avif).
- Vetorizar o logo em SVG limpo (versão colorida, versão monocromática creme, versão monocromática rosa-escuro) e gerar favicon a partir do símbolo do dente (SVG + PNG 32/180/512). Não aproveitar nenhum arquivo antigo.

## 5. Design system

### 5.1 Paleta (extraída das fotos e do logo)

| Token | Hex | Uso |
|---|---|---|
| --creme | #FBF6F2 | Fundo principal (substitui branco puro) |
| --areia | #F1E6DE | Seções alternadas, cards |
| --rosa-claro | #EBC4C0 | Detalhes, hover suave, fundos de destaque |
| --rosa-queimado | #C4857E | Elementos gráficos grandes, linhas, ícones (NÃO usar para texto pequeno) |
| --rosa-profundo | #8E4F4A | Botões primários, links, títulos de destaque (contraste ~5,8:1 sobre creme) |
| --salvia | #A9B79A | Fundos de seção, círculos decorativos |
| --salvia-profundo | #5E6E55 | Texto secundário de destaque, ícones (contraste ~5:1) |
| --madeira | #8A6A4F | Texturas, bordas, fundo da seção escura |
| --grafite | #2B2523 | Texto principal e fundo escuro (contraste > 14:1 sobre creme) |
| --cinza-metal | #8C8586 | Legendas grandes, linhas finas |

Gradiente de assinatura (somente para detalhes, linhas e o símbolo): linear de #EBC4C0 para #8C8586, o mesmo do logo. Proibido qualquer outro gradiente decorativo.

Regras de contraste: texto de corpo sempre em --grafite sobre --creme ou --areia. Texto claro (--creme) apenas sobre --rosa-profundo, --madeira ou --grafite. Validar WCAG AA (mínimo 4,5:1 para texto normal, 3:1 para texto grande) com ferramenta antes de aprovar cada seção.

### 5.2 Tipografia (self-hosted, font-display: swap, preload da fonte principal)

- Display: serifada com contraste e calor, no espírito do letreiro 3D. Sugestão: Fraunces (opsz alto, pesos 300 e 500) ou, alternativa, Cormorant Garamond (500). Escolher uma, justificar e manter.
- Texto: sans geométrica limpa e legível. Sugestão: Manrope (400, 500, 600).
- Assinatura manuscrita: apenas dentro do SVG do logo e em uma assinatura da doutora na seção sobre. Nunca em parágrafos.
- Escala fluida:
  - H1 hero: clamp(2.75rem, 1.6rem + 5.5vw, 6.5rem), peso 300, entrelinha 1.02, tracking -0.02em
  - H2: clamp(2rem, 1.3rem + 3vw, 3.75rem), entrelinha 1.1
  - H3: clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem), entrelinha 1.25
  - Corpo: clamp(1rem, 0.96rem + 0.2vw, 1.125rem), entrelinha 1.65, largura máxima 62ch
  - Eyebrow (sobretítulo): 0.75rem, caixa alta, tracking 0.22em, em Manrope 600 (remete ao "ODONTOLOGIA" do logo)
- Destaque editorial: uma palavra-chave por título em itálico ou na cor --rosa-profundo.

### 5.3 Espaçamento, forma e profundidade

- Escala de espaço (base 8): 4, 8, 16, 24, 32, 48, 72, 112, 160 px. Seções com padding vertical de clamp(5rem, 10vw, 10rem).
- Raios: 4px (campos), 24px (cards e botões em pílula = 999px), formas de arco e círculo grandes como motivo (vem da fachada em arco e dos círculos da sala).
- Motivo gráfico: círculos e arcos em --salvia e --areia com luz suave, como os nichos iluminados do consultório. Usar com parcimônia, nunca como decoração repetida.
- Sombras: apenas duas. suave: 0 10px 40px rgba(43,37,35,.08); elevada: 0 24px 60px rgba(43,37,35,.14). Sem sombras duras.
- Botões:
  - Primário: pílula --rosa-profundo, texto --creme, ícone de WhatsApp em SVG, hover com preenchimento deslizante em --grafite.
  - Secundário: pílula só com contorno 1px --grafite, hover preenche com --areia.
  - Altura mínima 52 px, área de toque mínima 48 px, foco visível com anel de 3px em --salvia-profundo.
- Imagens: cantos 24px ou recorte em arco, proporções 4:5 e 16:9, sem filtros pesados, tom quente. Cada imagem com alt descritivo, width e height.
- Grid: 12 colunas desktop, 4 colunas mobile, gutter 24px, container máximo 1360px. Breakpoints: 480, 768, 1024, 1280, 1680.

## 6. Assinatura de movimento (6 efeitos, consistentes)

Easing: cubic-bezier(0.22, 1, 0.36, 1). Durações de 0,7 a 1,2 s. Tudo desativado ou simplificado em prefers-reduced-motion.

1. Revelação de títulos por linha com máscara (linhas sobem de dentro do recorte): classe .reveal-lines.
2. Fade up (surge de baixo) em parágrafos, botões e blocos: classe .reveal-up.
3. Blur in com leve deslocamento em imagens: classe .reveal-blur.
4. Marquee de texto infinito na dobra 2: classe .marquee (pausa no hover e com reduced-motion).
5. Vídeo de fundo sticky com seções passando por cima (dobra 2).
6. Header que esconde ao descer e aparece ao subir, mais hover com preenchimento deslizante nos botões.

Opcionais, somente se não pesarem: contador animado nas avaliações e acordeão com altura animada no FAQ. Rolagem suave (Lenis) só se mantiver 60 fps em celular médio. Todos os efeitos devem funcionar ao rolar para cima e para baixo (usar IntersectionObserver sem desligar o estado ao sair da tela quando for revelação única; testar os dois sentidos).

## 7. Arquitetura: 4 dobras

Pré-loader curto com o símbolo do dente (máx. 1,5 s, nunca atrasa o LCP). Header fixo transparente com logo SVG, links âncora e botão WhatsApp.

Dobra 1: Hero em tela cheia (100svh)
- Vídeo ou imagem ocupando 100% da viewport. Vídeo: autoplay, muted, loop, playsinline, poster WebP, preload="metadata", MP4 H.264 + WebM, 3 a 5 MB, 8 a 15 s, sem áudio, fallback para imagem com prefers-reduced-motion e conexão lenta. Imagem: object-fit cover, srcset, fetchpriority="high", sem lazy-load.
- Degradê de proteção escuro à esquerda (de rgba(43,37,35,.72) para transparente à direita) só para dar leitura ao texto.
- Composição de assinatura: eyebrow "Odontopediatria humanizada · São José do Rio Pardo", H1 grande em serifada, alinhado à esquerda e ancorado na parte inferior, com uma palavra em destaque. Subtítulo curto. Máximo 2 botões: primário "Agendar pelo WhatsApp", secundário "Conhecer o consultório". Indicador de rolagem sutil (linha fina animada).
- Evitar hero com aparência genérica: nada de card flutuante de vidro, nada de gradiente decorativo.

Dobra 2: Cuidado que acolhe (vídeo sticky + marquee)
- Vídeo de fundo fixo (sticky) com o conteúdo passando por cima em painéis curtos: primeira consulta do bebê, sedação consciente com óxido nitroso, Ortopedia Funcional dos Maxilares, crianças com necessidades especiais.
- Marquee infinito: "Primeira consulta · Sedação consciente · Ortopedia funcional · Atendimento humanizado".
- Textos curtos, cada painel com um link interno para o serviço.

Faixa de contato (entre a dobra 2 e a 3)
- Faixa em --rosa-profundo ou --grafite com frase curta, botão de WhatsApp e telefone. Entrada com .reveal-up e botão com leve efeito magnético (somente desktop).

Dobra 3: Serviços e a doutora
- Serviços como lista editorial grande (linhas com número, nome, descrição curta e seta), com hover que revela imagem seguindo o cursor no desktop. Não usar grade de cards iguais.
- Bloco "Sobre a Dra. Gabriela": foto com recorte em arco (_MG_3214), texto, CROSP 95.948, especialidades [PENDENTE: títulos e registros de especialidade], assinatura manuscrita em SVG.

Dobra 4: Confiança, dúvidas e contato
- Avaliações reais do Google (nota 5,0, 105 avaliações; usar apenas comentários autorizados; os três comentários vistos no perfil são de Danilo Peixoto, Cristiane Dalbon e Heloisa Mota [PENDENTE: autorização]).
- FAQ com 8 a 10 perguntas, respostas de 40 a 60 palavras (ver seção 8).
- Localização: foto da fachada, mapa com botão "Traçar rota", horário, formulário curto (nome, telefone, interesse) com validação.
- Rodapé: logo SVG, frase de acolhimento, navegação, NAP completo, redes sociais, CROSP, aviso LGPD.

Elementos globais: botão flutuante de WhatsApp com mensagem pré-preenchida ("Olá, Dra. Gabriela! Gostaria de agendar uma consulta para meu filho(a)."), barra fixa de contato no mobile, CTA visível em todas as dobras.

## 8. SEO, GEO e AEO

- Uma única H1 por página, H2/H3 lógicos. Title até 60 caracteres, meta description até 155, canonical, Open Graph e Twitter Cards.
- URLs limpas: / (home), /dentista-infantil-sao-jose-do-rio-pardo, /primeira-consulta-bebe-sao-jose-do-rio-pardo, /ortopedia-funcional-dos-maxilares-sao-jose-do-rio-pardo, /sedacao-oxido-nitroso-crianca, /sobre-dra-gabriela-faria, /faq, /contato. Como são 4 dobras, as páginas internas podem ser criadas em fases posteriores; a home deve funcionar sozinha.
- JSON-LD: Dentist (ou MedicalBusiness) com PostalAddress, GeoCoordinates [PENDENTE], openingHours [PENDENTE], sameAs (Instagram, Facebook, Google), FAQPage, BreadcrumbList e Service. AggregateRating somente com a nota e a quantidade reais, conferidas no dia da publicação.
- Palavras-chave alvo: dentista infantil em São José do Rio Pardo, odontopediatra São José do Rio Pardo, dentista para bebê, primeira consulta odontológica infantil, ortopedia funcional dos maxilares, sedação com óxido nitroso para crianças, frenectomia em bebê, dentista para crianças com necessidades especiais.
- FAQ sugerido (respostas a redigir na etapa de textos): quando levar o bebê ao dentista pela primeira vez; como é a primeira consulta; o que é ortopedia funcional dos maxilares; a sedação com óxido nitroso é segura; criança com medo de dentista; atendimento a crianças com necessidades especiais; o que é frenectomia; como evitar cárie na infância.
- Arquivos: sitemap.xml, robots.txt, llms.txt (resumo do site para mecanismos de IA), alt descritivo em todas as imagens, links internos entre serviços e FAQ.
- NAP idêntico em site, rodapé, schema e Perfil da Empresa no Google.

## 9. Performance e acessibilidade

- Metas: LCP < 2,5 s, INP < 200 ms, CLS < 0,1, Lighthouse > 90 em todas as categorias.
- Fontes self-hosted com preload da principal, imagens com width e height, lazy-load abaixo da dobra, CSS crítico inline, JS com defer, zero bibliotecas desnecessárias.
- Acessibilidade: contraste AA, foco visível, navegação por teclado, aria-labels, links descritivos, labels em formulários, vídeo sem áudio e com alternativa estática.

## 10. Conversão e rastreamento

- Eventos GA4/GTM e pixel da Meta: clique no WhatsApp, envio de formulário, clique em telefone. Banner de consentimento de cookies (LGPD) antes de disparar qualquer tag. IDs [PENDENTE].
- Formulário curto (nome, telefone, interesse) com validação, envio direto ao WhatsApp ou e-mail [PENDENTE: definir destino].

## 11. Tecnologia e deploy

- Stack: [PENDENTE: confirmar HTML/CSS/JS puro ou Astro]. Recomendação para este projeto: Astro ou HTML/CSS/JS puro, por entregar o menor JS possível e o melhor desempenho. Evitar frameworks pesados.
- Deploy: GitHub + domínio próprio. Sem Vercel. Registrar qualquer configuração de publicação neste arquivo.

## 12. Estrutura de pastas

/assets/originais, /assets/img (AVIF/WebP otimizados), /assets/video, /assets/fonts, /assets/logo (SVG), /css (tokens.css, base.css, components.css, motion.css), /js (reveal.js, marquee.js, header.js, form.js, consent.js), index.html, sitemap.xml, robots.txt, llms.txt, DIRECAO-SITE.md.

Tokens de design vivem em tokens.css com as variáveis da seção 5. Nenhum valor de cor ou fonte "solto" fora dele.

## 13. Pendências (preencher antes do código final)

1. Fotos sem marca d'água da Evidência Revista (ou autorização escrita).
2. Autorização do responsável para uso da imagem da criança.
3. Confirmar CROSP 95.948 e títulos de especialidade (OFM, odontopediatria).
4. Horário completo, e-mail, coordenadas do mapa, domínio, LinkedIn.
5. Vídeo para o hero e para a dobra 2 (ou decidir por imagem).
6. Autorização dos depoimentos do Google.
7. Convênios (se houver).
8. IDs de GA4, GTM e pixel da Meta.
9. Stack definitiva.

## 14. Protocolo de trabalho (um passo por vez)

O Antigravity só executa o passo que o Fabiano pedir. Ao terminar cada passo, parar, resumir o que fez e aguardar aprovação.

1. Organização do projeto e leitura das referências (design system do Dr. Henrique + scripts Python).
2. Fundação: tokens.css, tipografia self-hosted, reset e utilitários de motion (.reveal-up, .reveal-blur, .reveal-lines, .marquee).
3. Logo e favicon: vetorizar em SVG (3 versões) e gerar favicon e ícones.
4. Header, pré-loader e botão flutuante de WhatsApp.
5. Dobra 1: hero.
6. Dobra 2: vídeo sticky e marquee.
7. Faixa de contato.
8. Dobra 3: serviços e Dra. Gabriela.
9. Dobra 4: avaliações, FAQ, localização, formulário e rodapé.
10. SEO técnico: meta tags, JSON-LD, sitemap, robots, llms.txt.
11. Performance, acessibilidade e checklist final.
12. Deploy em GitHub e domínio próprio.

## 15. Pasta de referência: Dr. Henrique Salles, Implantodontia

Contém `index.html` e a pasta `assets`. Uso permitido: apenas como referência de ESTRUTURA de design system (organização de tokens, nomenclatura de variáveis, componentes, escala tipográfica, espaçamento, padrões de código e de pastas).
Uso proibido: copiar cores (azul), logo, textos, fotos, nome, dados ou qualquer elemento de identidade do Dr. Henrique. A identidade da Dra. Gabriela vem exclusivamente das seções 4 e 5 deste arquivo.
Se houver conflito entre a referência e este arquivo, este arquivo vence.

## 16. Arquivos Python na pasta do projeto

`generate_design_system.py` e `test_builder.py`: ler, entender o que fazem e relatar. Não executar nem alterar sem aprovação do Fabiano. Se forem úteis para gerar os tokens do design system, propor como aproveitá-los adaptados à paleta da seção 5.


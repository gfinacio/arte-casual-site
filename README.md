# Arte Casual – Móveis Sob Medida

Site institucional estático (HTML, CSS e JavaScript puros, sem dependências nem etapa de build).

## Estrutura
- `index.html`: conteúdo e metadados
- `css/style.css`: estilos
- `js/main.js`: galeria com ampliação
- `img/`: fotos otimizadas e logo
- `_headers`: cabeçalhos de segurança (Cloudflare Pages e Netlify)

## Testar localmente
`python3 -m http.server 8000` e abra http://localhost:8000

## Publicar
- **GitHub Pages:** envie os arquivos ao repositório, depois Settings > Pages > Deploy from a branch > `main` / root. Ative "Enforce HTTPS".
- **Cloudflare Pages ou Netlify:** conecte o repositório (sem comando de build, pasta de saída `/`). O arquivo `_headers` aplica os cabeçalhos de segurança.

## Adicionar uma foto
1. Salve a foto otimizada (até 1400 px de largura, sem EXIF/GPS) em `img/`.
2. Em `index.html`, copie um bloco `<button class="g ...">` da seção Portfólio e troque `src`, `alt` e o rótulo (`data-t` e `<span>`).
3. Se a nova foto for a 8ª, ajuste as classes `.g1` a `.g7` em `css/style.css`.

## Segurança e privacidade
- Há CSP restritiva (meta tag e `_headers`). Se adicionar scripts ou estilos inline, ela os bloqueará: use arquivos separados.
- Não suba fotos originais da câmera/celular (podem conter localização no EXIF) nem fotos de clientes sem autorização.
- As fontes vêm do Google Fonts. Para hospedá-las localmente, baixe Cormorant Garamond e Montserrat (woff2), use `@font-face` no CSS e remova os domínios do Google da CSP.

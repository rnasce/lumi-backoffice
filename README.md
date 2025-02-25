# lumi-backoffice 

Bem-vindo ao **Lumi Backoffice**, uma Progressive Web App (PWA) simples e leve para gerenciamento local de dados. Esta aplicação permite que usuários organizem links, e-mails, fotos, eventos, notas e tarefas diretamente no navegador, com armazenamento local usando `localStorage`.

## Funcionalidades
- **Gerenciador de Links**: Adicione, visualize e remova links favoritos.
- **E-mails**: Salve e gerencie uma lista de e-mails ou contatos.
- **Fotos**: Faça upload e visualize imagens (armazenadas como base64).
- **Calendário**: Crie e liste eventos com datas.
- **Bloco de Notas**: Escreva e edite notas pessoais.
- **Tarefas**: Gerencie uma lista de tarefas com status de conclusão.
- **Exportar/Importar**: Faça backup ou restaure todos os dados em formato JSON.

## Como Usar
1. Acesse a PWA em: [https://seuusuario.github.io/lumi-backoffice/](https://seuusuario.github.io/lumi-backoffice/)
2. Navegue pelas abas (Links, E-mails, Fotos, etc.) usando os botões no topo.
3. Adicione seus dados nas respectivas seções. Tudo é salvo automaticamente no navegador.
4. Para usar offline, instale a PWA:
   - No Chrome/Edge, clique no ícone de instalação no canto superior direito.
   - No celular, adicione à tela inicial via opções do navegador.

## Instalação no GitHub Pages
Este projeto está hospedado no GitHub Pages. Para configurá-lo no seu próprio repositório:
1. Clone ou faça download deste repositório.
2. Faça upload dos arquivos (`index.html`, `styles.css`, `script.js`, `manifest.json`, `icon.png`) para o seu repositório GitHub.
3. Em "Settings" > "Pages", configure:
   - Branch: `main`
   - Folder: `/ (root)`
4. Acesse o URL gerado: `https://seuusuario.github.io/lumi-backoffice/`.

## Arquivos
- `index.html`: Estrutura principal da PWA.
- `styles.css`: Estilos visuais.
- `script.js`: Lógica e gerenciamento de dados.
- `manifest.json`: Configuração da PWA (nome, ícone, etc.).
- `icon.png`: Ícone genérico da aplicação (192x192 pixels).

## Limitações
- Armazenamento limitado pelo `localStorage` (~5-10 MB, dependendo do navegador).
- Fotos grandes podem ocupar espaço rapidamente devido ao formato base64.
- Funciona offline, mas os dados são salvos apenas no navegador atual.

## Integração com Google Sites
Para adicionar ao Google Sites:
- **Link**: Insira o URL `https://seuusuario.github.io/lumi-backoffice/` como um botão ou texto.
- **Iframe**: Use o código abaixo na opção "Incorporar":
  ```html
  <iframe src="https://seuusuario.github.io/lumi-backoffice/" width="100%" height="600"></iframe>

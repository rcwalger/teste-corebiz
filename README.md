Missão
====================

Desenvolver uma página baseando-se no layout e APIs abaixo.

- Link do layout: https://www.figma.com/file/awhTJyKgrjEOqPHUrrFBv0/Corebiz---Frontend-Challenge
- Link das APIs: https://documenter.getpostman.com/view/1811817/Szzj8yAq?version=latest


Como rodar
====================

## Opção 1 - Pelo VSCode

- Abrir o terminar e executar 'serve'
- Abrir o localhost

## Opção 2 - Pelo Compilador Prepos

- Baixar o compilador Prepos (https://prepros.io/downloads)
- Abra o Prepos
- Dentro da pasta do projeto localize o arquivo 'prepos.config'
- Arraste o arquivo 'prepos.config' no modelo 'Drag and drop' para o Prepos ( https://prepros.io/help/getting-started )
- Clique com o botão direito sobre o Projeto e selecione 'Open Preview' ( https://prepros.io/help/live-preview )

## Prepos

O Prepros compila seus arquivos, transpila seu JavaScript, recarrega seus navegadores e torna realmente fácil desenvolver e testar seus sites.

- Como usar:
  - Abra o Prepos
  - Dentro da pasta do projeto baixada do Repositório localize o arquivo 'prepos.config'
  - Arraste o arquivo 'prepos.config' no modelo 'Drag and drop' para o Prepos ( https://prepros.io/help/getting-started )
  - Feito isso, agora é só realizar as modificações que deseja nos arquivos .sass ou .js e salvar. 
  - ** O Prepos compila automáticamente **

- Compilador SASS ( https://prepros.io/help/sass )
  - Os arquivos finais são gerados dentro da pasta 'build'.
  - Dentro da pasta 'custom', temos os arquivos de configuração que indicam quais arquivos deseja concatenar para gerar o arquivo final
  - Dentro da pasta 'final' estão os arquivos .css compilados e minimificados. 

- Compilador JS ( https://prepros.io/help/bundle-javascript )
- Os arquivos finais são gerados dentro da pasta 'build'.
  - Dentro da pasta 'custom', temos os arquivos de configuração que indicam quais arquivos deseja concatenar para gerar o arquivo final
  - Dentro da pasta 'final' estão os arquivos .css compilados e minimificados. 


Estrutura de pastas
====================

- /css
  - /build: Arquivos finais
  - /baseStyles : Contém os estilos bases da loja. Como fontes, cores, largura do site, resets e botões. 
  - /commons : Contém os estilos auxiliares que são utilizados por toda a loja
  - /components : Contém os estilos referentes as customizações criadas em React
  - /plugins : Contém os estilos de Ferramentas de Terceiros
  - /footer: Contém os estilos referente ao Footer
  - /header: Contém os estilos referente ao Header

- /js
  - /build: Arquivos finais
  - /commons : Contém os scripts auxiliares que são utilizados por toda a loja
  - /components : Contém os scripts referentes as customizações criadas em React
  - /footer: Contém os scripts referente ao Footer
  - /header: Contém os scripts referente ao Header  
  - /home: Contém os scripts referente a Página Principal

- /node_modules: Componentes auxiliares para o funcionamento do site

- /index.html : Arquivo HTML Principal  

- /prepos.config : Arquivo responsável pela configuração do compilador
# API de Fatos Históricos 
Desenvolvi este projeto como parte da Missão 04 do Módulo 2 da carreira Back-end no curso de Programador Full Stack na DevMedia. A missão abordou os tópicos "Node.js: Primeira API Hello World
" e "Node.js: Recebendo parâmetros no back-end".

A proposta desse projeto é criar uma API capaz de retornar um fato histórico com base no ano informado. A aplicação recebe um ano entre 1920 e 2020 e retorna um fato histórico ocorrido naquele ano. Isso será feito utilizando conteúdos que aprendemos em JavaScript e Node.js.

Aproveitei este projeto e adicionei novas funcionalidades com base em atividades propostas pelo professor da disciplina de Análise e Projeto de Sistemas da minha graduação em Análise e Desenvolvimento de Sistemas. Desenvolvi um frontend onde o usuário pode inserir um ano e, ao conectar com a API, receber um fato histórico sobre esse período.

## 🛠️ Construído com

<div style="display: inline-block"><br/>
  <img align="center" alt="html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img align="center" alt="html5" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
  <img align="center" alt="html5" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" /> 
  <img align="center" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> 
  <img align="center" alt="html5" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img align="center" alt="html5" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</div><br/>

## 👨🏽‍💻 Versão das Tecnologias

* JavaScript ECMAScript 6 (ES6)
* Node.js 22.12.0
* Express.js 4.21.2

## ✒️ Autor

* **Laércio Fernandes** - [LinkedIn](https://www.linkedin.com/in/laercio-fernandes/)

## 🚀 Guia de Como Baixar e Rodar o Projeto

Este guia explica como baixar e rodar a API de Fatos Históricos, que fornece informações sobre eventos importantes de cada ano.

### Ferramentas e Tecnologias Necessárias

Antes de começar, você precisará das seguintes ferramentas:

1.  **Node.js:** É o ambiente de execução JavaScript que permite rodar a API no seu computador.
    *   **Como baixar:**
        *   Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
        *   Baixe a versão LTS (Long Term Support), que é mais estável.
        *   Siga as instruções de instalação para o seu sistema operacional (Windows, macOS ou Linux).
2.  **NPM (Node Package Manager):** É instalado automaticamente com o Node.js e é usado para gerenciar as dependências da API (as bibliotecas de código que ela precisa para funcionar).
3.  **Editor de Código (Opcional, mas recomendado):** Um programa para editar os arquivos de código da API, como o Visual Studio Code (VS Code).
    *   **Como baixar:**
        *   Acesse o site oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)
        *   Baixe a versão para o seu sistema operacional.
        *   Siga as instruções de instalação.

### Passo a Passo para Baixar e Rodar a API

1.  **Clone o repositório do GitHub:**
    *   Abra o terminal (Prompt de Comando, PowerShell, Terminal do macOS ou Linux).
    *   Navegue até o diretório onde você deseja salvar os arquivos da API. Por exemplo, para salvar na sua área de trabalho, use o comando:
        ```sh
        cd C:\Users\seu_usuario\OneDrive\Área de Trabalho
        ```
        (Substitua `seu_usuario` pelo seu nome de usuário no Windows).
    *   Use o comando `git clone` para baixar os arquivos do repositório. Você precisará do link do repositório no GitHub. O comando será algo como:
        ```sh
        git clone https://github.com/fernandesmelo/api-fatos-historicos.git
        ```
    *   Isso criará uma pasta com o nome do repositório na sua área de trabalho e baixará todos os arquivos para dentro dela.
2.  **Abra o terminal:**
    *   No Windows, procure por "Prompt de Comando" ou "PowerShell" no menu Iniciar.
    *   No macOS, abra o aplicativo "Terminal" (geralmente encontrado em /Aplicativos/Utilitários).
    *   No Linux, abra o terminal padrão do seu sistema.
3.  **Navegue até a pasta da API:**
    *   Use o comando `cd` (change directory) para navegar até a pasta onde você salvou os arquivos da API. Por exemplo, se você salvou os arquivos na pasta `api-fatos-historicos` na sua área de trabalho, o comando seria:
        ```sh
        cd C:\Users\seu_usuario\OneDrive\Área de Trabalho\api-fatos-historicos
        ```
        Substitua `seu_usuario` pelo seu nome de usuário no Windows.
4.  **Instale as dependências:**
    *   Execute o seguinte comando no terminal para instalar as bibliotecas de código que a API precisa:
        ```sh
        npm install
        ```
        Este comando lê o arquivo `package.json` e baixa todas as dependências listadas nele.
5.  **Rode a API:**
    *   Execute o seguinte comando para iniciar o servidor da API:
        ```sh
        node server.js
        ```
        Se tudo correr bem, você verá a mensagem "Servidor iniciado na porta 8080" no terminal.
6.  **Acesse a API no navegador:**
    *   Abra o seu navegador (Chrome, Firefox, Safari, etc.) e digite o seguinte endereço na barra de endereços:
        ```
        http://localhost:8080/?ano=1920
        ```
        Substitua `1920` pelo ano que você quer pesquisar.
    *   Você deverá ver um JSON com o fato histórico correspondente ao ano pesquisado.

### Como Usar a API

Para pesquisar um fato histórico, adicione o parâmetro `ano` à URL da API, como no exemplo acima. A API retornará um JSON com as informações sobre o fato histórico daquele ano.

### Solução de Problemas

*   **Erro "comando 'npm' não encontrado":** Verifique se o Node.js e o NPM foram instalados corretamente. Tente reinstalar o Node.js.
*   **Erro "Cannot find module":** Verifique se você executou o comando `npm install` na pasta correta da API.
*   **A API não está rodando:** Verifique se você executou o comando `node server.js` e se não há erros no terminal.
*   **A API não retorna os dados corretos:** Verifique se o arquivo `fatos.js` contém os dados corretos e se a lógica da API está funcionando como esperado.

Se você tiver alguma dúvida ou problema, procure ajuda online ou entre em contato com um desenvolvedor experiente.

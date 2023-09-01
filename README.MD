# Projeto Individual - Módulo 4

Este é um projeto de ferramenta de linha de comando em Node.js que recebe uma lista de propriedades de CSS, as armazena e as ordena alfabeticamente para ajudar na identificação rápida das propriedades. Apresentado como forma de avaliação no módulo 4 do curso Códigos do Amanhã. 

## Como Usar
Certifique-se de ter o Node.js instalado em seu sistema.
- [NodeJS - Download](https://nodejs.org/pt-br/download)

### 1) Clonando o Projeto 
- Abra o terminal.
- Navegue até o diretório onde deseja clonar o projeto.
- Execute o seguinte comando para clonar o projeto:

   ```bash
   git clone https://github.com/jolaiana/Organizador-de-dados.git

### 2) Executando o Projeto
- Instalando as dependências:
Antes de iniciar a ferramenta, é importante instalar as dependências necessárias. No terminal, dentro da pasta do projeto, execute:

 node css-sorter.js

- Iniciando a Ferramenta:
Com as dependências instaladas, você já pode executar o projeto. Digite o seguinte comando no terminal:

 node Script.js

O programa agora estará em execução e solicitará que você insira as propriedades de CSS desejadas.

### 3) Utilizando a Ferramenta
No terminal, digite uma propriedade de CSS (exemplo: background-color) e pressione Enter.
Continue inserindo outras propriedades que deseja ordenar.
Quando terminar, digite "SAIR" e pressione Enter.
A ferramenta exibirá a lista de propriedades de CSS em ordem alfabética.

### 4) Exemplos de Respostas
Sucesso:
Se você inserir as propriedades color, font-size e background-color e, em seguida, digitar "SAIR", a saída será:
Propriedades ordenadas:
background-color
color
font-size

Erro:
Se você inserir um valor inválido como 12345, a ferramenta exibirá:
Por favor, insira uma propriedade válida (somente letras e traços).

## Referências 
  - [NodeJS - documentação](https://nodejs.org/en/docs)

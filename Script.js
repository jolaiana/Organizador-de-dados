// Importa o módulo readline, que permite a interação com o usuário pelo terminal.
const readline = require('readline');

// Cria uma interface de leitura e escrita.
const rl = readline.createInterface({
  input: process.stdin,   // Define a entrada como o terminal.
  output: process.stdout  // Define a saída como o terminal.
});

// Array para armazenar as propriedades de CSS digitadas pelo usuário.
const properties = [];

// Função para obter a resposta do usuário para criar a lista.
function getInput() {
rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (input) => {
    if (input.toUpperCase() === 'SAIR') {
      rl.close();  // Fecha a interface caso a entrada seja "SAIR".
    } else if (/^[a-zA-Z-]+$/.test(input)) {
      // Verifica se a entrada contém apenas letras e traços.
      properties.push(input);  // Adiciona a entrada ao array de propriedades.
      getInput();  // Chama a função novamente para obter mais entradas.
    } else {
      // Exibe uma mensagem de erro caso a entrada contenha números ou caracteres inválidos.
    console.log('Por favor, insira uma propriedade válida (somente letras e traços).');
      getInput();  // Chama a função novamente para obter uma nova entrada.
    }
  });
}

// Função para imprimir as propriedades ordenadas.
function printSortedProperties() {
  const sortedProperties = properties.slice().sort();  // Cria uma cópia ordenada do array de propriedades.
  console.log('Propriedades ordenadas:');
  sortedProperties.forEach((prop) => {
    console.log(prop);  // Imprime cada propriedade na ordem.
  });
}

// Mensagem inicial.
console.log('Digite as propriedades de CSS. Digite "SAIR" para finalizar.');

// Inicia o processo de obtenção de entradas.
getInput();

// Evento que é chamado quando a interface é fechada.
rl.on('close', () => {
  // Chama a função para imprimir as propriedades ordenadas.
  printSortedProperties();
});

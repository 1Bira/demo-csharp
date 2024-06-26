// index.js

// Exemplo de um segredo exposto no código
const apiKey = '12345-ABCDE-SECRET-KEY';
const apiKey2 = process.env.API_KEY;

// Função que utiliza o segredo
function fetchData() {
  // Simulação de uso do segredo (não faça isso na prática!)
  console.log(`Fetching data using API Key: ${apiKey} e ${apiKey2}`);
}

// Chamada da função fetchData
fetchData();
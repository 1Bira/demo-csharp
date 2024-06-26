// index.js

// Exemplo de um segredo exposto no código
const github_personal_access_token = 'github_pat_12345-ABCDE29WA49CiicsCxC0a6HQ6EvgwyBW6M5PXOPlpiOGY4t';
const azure_active_directory_application_secret = '12345-ABCDE-SECRET-KEY-123';
const apiKey2 = process.env.API_KEY;

// Função que utiliza o segredo
function fetchData() {
  // Simulação de uso do segredo (não faça isso na prática!)
  console.log(`Fetching data using API Key: ${apiKey} e ${apiKey2}`);
}

// Chamada da função fetchData
fetchData();
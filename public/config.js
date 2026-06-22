// ============================================================
//  CREDENCIAIS DO APP — GestaoAlugueis
//  Azure App Registration — TOP INTERNACIONAL
// ============================================================
const CONFIG = {
  // Azure App Registration → Application (client) ID
  clientId: "b270c0cd-fc9a-4551-84f5-2fe3c6be60fa",

  // Azure App Registration → Directory (tenant) ID
  tenantId: "8003b84e-097a-420a-afa4-ca9eab1bc74d",

  // ID do arquivo ALUGUEIS.xlsx no OneDrive for Business
  // Extraído de: sourcedoc=%7B947BE6F8-B5A9-47BA-889C-975B03BC4E15%7D
  fileId: "947BE6F8-B5A9-47BA-889C-975B03BC4E15",

  // URL do app — atualizar após deploy na Vercel
  redirectUri: window.location.origin,

  // Nome da tabela dentro do Excel
  tableName: "BASE",

  // Nome da aba/worksheet do Excel
  sheetName: "BASE"
};

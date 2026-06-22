# 🏢 Gestão de Aluguéis

App de controle de aluguéis com dados salvos no Excel (OneDrive for Business) via Microsoft Graph API.

---

## 🚀 Deploy rápido

### 1. Registrar o app no Azure Portal

1. Acesse [portal.azure.com](https://portal.azure.com)
2. Vá em **Microsoft Entra ID → App registrations → New registration**
3. Configure:
   - **Name:** `GestaoAlugueis`
   - **Supported account types:** `Accounts in this organizational directory only`
   - **Redirect URI:** `Single-page application (SPA)` → `https://SEU-APP.vercel.app`
4. Clique **Register**
5. Copie o **Application (client) ID** e o **Directory (tenant) ID**
6. Vá em **API permissions → Add a permission → Microsoft Graph → Delegated:**
   - `Files.ReadWrite`
   - `User.Read`
7. Clique **Grant admin consent**

### 2. Preparar o Excel no OneDrive

1. Coloque o arquivo `ALUGUEIS.xlsx` na raiz do seu OneDrive for Business
2. O arquivo precisa ter uma **Tabela** chamada `BASE` na Sheet `BASE`
   - Colunas: `EMPRESA | LOJAS | ANO | Mês | CIDADE | UF | CATEGORIA | Valor | OBS | MES_NUM`
3. Copie o **Item ID** do arquivo:
   - Abra o arquivo no OneDrive → clique nos 3 pontos → Detalhes → copie o ID da URL

### 3. Configurar o app

Edite o arquivo `public/config.js` com suas credenciais:

```js
const CONFIG = {
  clientId: "SEU_CLIENT_ID_AQUI",
  tenantId: "SEU_TENANT_ID_AQUI",
  fileId: "ID_DO_ARQUIVO_EXCEL_NO_ONEDRIVE",
  redirectUri: "https://SEU-APP.vercel.app"
};
```

### 4. Deploy na Vercel

```bash
# Instale a Vercel CLI
npm i -g vercel

# Na pasta do projeto
vercel --prod
```

Ou conecte o repositório GitHub direto na [vercel.com](https://vercel.com).

---

## 📁 Estrutura do projeto

```
aluguel-app/
├── index.html          # App principal
├── public/
│   └── config.js       # ← Suas credenciais (não commitar com dados reais)
├── vercel.json         # Config Vercel
└── README.md
```

---

## 🔐 Segurança

- O `config.js` com `clientId` e `tenantId` é **seguro para ficar no frontend** — são identificadores públicos, não segredos.
- O acesso real é protegido pelo **login Microsoft** do usuário.
- Nunca coloque `client secrets` no frontend.

---

## 📊 Funcionalidades

- ✅ Login com conta Microsoft 365 corporativa
- ✅ Lançamento mensal por formulário e grade editável
- ✅ Dashboard com gráficos interativos
- ✅ Relatórios agrupados
- ✅ Cadastro de empresas, lojas e categorias
- ✅ Dados salvos direto no Excel do OneDrive
- ✅ Deploy gratuito na Vercel

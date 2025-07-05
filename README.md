# Desafio Lacrei

Descrição breve do seu projeto. Adicione 1-2 frases explicando o propósito principal.

### Pré-requisitos

- Node.js 14.x ou superior
- npm 6.x+ ou yarn 1.22+
- Git

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git

# Acesse o diretório
cd seu-projeto

# Instale as dependências
npm install
# ou
yarn install
```

# 🛠 Desenvolvimento

## Execute o servidor de desenvolvimento:

bash
```
npm run dev
# ou
yarn dev
```
O aplicativo estará disponível (por padrão) em http://localhost:3000.  

# 🏗 Build e Deploy

## Build para Produção

```
npm run build
# ou
yarn build
```
  
# Deploy na Vercel

## O deploy na Vercel é automático via Git:

Push para a branch `main` dispara deploy de produção</small>  

Push para outras branches cria um Preview deployment  

# 🧪 Testes

## Executando Testes

bash
```
# Testes unitários
npm test
```


## 📊 Test Coverage

| Categoria       | Cobertura |
|-----------------|-----------|
| **Statements**  | 94.39%    |
| **Branches**    | 96.82%    |
| **Functions**   | 91.37%    |
| **Lines**       | 94.39%    |

![Captura de tela de 2025-07-05 04-54-24](https://github.com/user-attachments/assets/9da1207f-86b3-41e8-ab3b-b458bf5c9a5d)  



# 🔙 Estratégia de Rollback

## Rollback Simples

Acesse Vercel Dashboard

Navegue até seu projeto → "Deployments"

Encontre a versão estável anterior

Clique em "..." → "Instant Rollback"  



## Rollback Funcional

### Usando Preview Deploys:

Mantenha sempre um preview deployment estável

Em caso de problemas:

Promova um preview estável para produção    


# Tomadas de Decições  

### Styled Components + SSR
##### Configuração via Babel e _document.js para evitar FOUC e melhorar SEO. Plugin otimiza classes (minificação e determinismo).

### Tema Global
##### Centralização de variáveis de design (cores/fontes) para consistência visual, manutenção simplificada e suporte a futuros temas (ex.: dark mode). Cores validadas para acessibilidade (WCAG).

### Cabeçalho Fixo
##### position: fixed para navegação persistente durante scroll, melhorando usabilidade e performance (sem repaints). Layout com flex/grid para organização visual e mais centralizado ajudando na visibilidade.

### Style Guide
##### Componentes e palhetas alinhadas ao branding da Lacrei.

### Gestão de Estado/Rotas
##### Uso estratégico de hooks (useState, useRouter) para complexidade controlada. Páginas (apenas (index) "/" e "/about").

### Responsividade + Imagens
##### Abordagem mobile-first com breakpoints baseados em conteúdo. Imagens AVIF para redução de ~50% no tamanho (melhoria de LCP e performance).

### Testes Unitários
##### Foco em componentes críticos (Jest + Testing Library), validando: renderização, interações e roles ARIA para acessibilidade.     



#Link Do Deploy
```
https://desafio-lacrei-phi.vercel.app/
```

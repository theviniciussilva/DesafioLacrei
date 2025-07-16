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

# Acessibilidade e Desempenho

##### Desktop                                                                                                                              
<img width="486" height="435" alt="image" src="https://github.com/user-attachments/assets/153f0abe-ab7b-486c-bc1e-f1cb7e1d5766" />  

##### Mobile
<img width="469" height="439" alt="image" src="https://github.com/user-attachments/assets/d8c9638d-0eda-446c-a4fb-60cf3545ef13" />





# 🧪 Testes

## Executando Testes

bash
```
# Testes unitários
npm test
```


## 📊 Test Coverage

| Componentes     | Cobertura |
|-----------------|-----------|
| **Button**      | 100%      |
| **Card**        | 100%      |
| **Footer**      | 100%      |
| **Header**      | 86%       |

![Captura de tela de 2025-07-05 04-54-24](https://github.com/user-attachments/assets/9da1207f-86b3-41e8-ab3b-b458bf5c9a5d)  



# 🔙 Estratégia de Rollback

## Rollback Simples

Acesse Vercel Dashboard

Navegue até seu projeto → "Deployments"

Encontre a versão estável anterior

Clique em "..." → "Instant Rollback"  



# Fluxo de Rollback no Vercel
📋 Processo Step-by-Step
## Etapa 1: Identificação do Problema

Monitorar logs de erro no Vercel Dashboard
Verificar métricas de performance
Confirmar o deployment problemático
Identificar a versão estável anterior

## Etapa 2: Rollback Imediato

Acessar Vercel Dashboard

Login na conta da equipe
Navegar para o projeto afetado


Localizar Deployment Estável

Ir para aba "Deployments"
Identificar último deployment funcional (status ✅)
Verificar data/hora do deployment


Executar Rollback

Clicar no deployment estável
Selecionar "Promote to Production"
Confirmar a ação

## Preview Deploys

Sempre criar preview antes de merge para main
Testar funcionalidades no ambiente de preview
Validar com stakeholders quando necessário


# Tomadas de Decições  

### Styled Components + SSR
##### Configuração via Babel e _document.js para evitar FOUC e melhorar SEO. Plugin otimiza classes (minificação e determinismo).

### Tema Global
##### Centralização de variáveis de design (cores/fontes) todas as variáveis de cores forám utilizadas seguindo o style guide, apenas alterada os nomes para melhor entendimento no desinvolvimento para consistência visual, manutenção simplificada e suporte a futuros temas (ex.: dark mode). Cores validadas para acessibilidade (WCAG).

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



# Link Do Deploy

https://desafio-lacrei-phi.vercel.app/


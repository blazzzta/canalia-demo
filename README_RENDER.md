# CanalIA — Demo (para Render.com)
Data: 2025-09-16

## Como publicar no Render
1) Criar repo GitHub chamado `canalia-demo`.
2) Fazer upload de **todos** os ficheiros desta pasta (inclui `package.json`, `tsconfig.json`, `src/`, `demo/`).
3) No https://render.com → New → Web Service → escolher o repo.
4) Configurar:
   - Runtime: Node
   - Region: Frankfurt (EU)
   - Build Command: npm install && npm run build
   - Start Command: npm start
   - Env Var: NODE_VERSION=20
   - Plano: Free
5) Abrir a URL -> `/demo` deve carregar a página.

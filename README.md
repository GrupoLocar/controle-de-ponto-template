# Controle de Ponto (Template) Fase 1 - MVP
> Teste técnico — Desenvolvedor(a) Fullstack Node/Python/React (Grupo Locar)

Este repositório é um **template** para iniciar o MVP do Sistema de Controle de Ponto solicitado no teste.
Ele vem com diretórios **backend/**, **frontend/** e **docs/** (com a coleção do Postman).

---

## 🧱 Stack sugerida
- **Backend**: Node.js (Express) **ou** Python (FastAPI/Flask) — a estrutura inicial usa **Node.js/Express**.
- **Frontend**: **Next.js** (React).
- **Banco**: MongoDB.
- **Autenticação**: JWT.
- **APIs**: RESTful + validação + tratamento de erros.

---

## 📁 Estrutura (Sugestão)
```
controle-de-ponto-template/
├─ backend/            # API Express (Node.js) — inicial
│  ├─ src/
│  │  ├─ core/         # db, middlewares, errors (exemplos)
│  │  ├─ modules/      # auth, records, adjustments etc. (sugestão de organização)
│  │  └─ app.js        # app Express
│  ├─ .env.example
│  └─ package.json
├─ frontend/           # Next.js básico
│  ├─ pages/
│  │  └─ index.jsx
│  ├─ next.config.js
│  └─ package.json
├─ docs/
│  └─ postman_collection.json
└─ README.md
```

---

## ▶️ Como rodar
### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev   # inicia em http://localhost:4000
```

### 2) Frontend
```bash
cd ../frontend
npm install
npm run dev   # inicia em http://localhost:3000
```

Ajuste `NEXT_PUBLIC_API_BASE` no frontend se necessário (padrão: `http://localhost:4000`).

---

## 🔌 Endpoints (ver coleção do Postman em docs/)
- Auth: `POST /auth/register`, `POST /auth/login`, `GET /me`
- Records: `POST /records`, `GET /records?from&to`
- Mirror: `GET /mirror?month`
- Adjustments & Approvals: `POST /adjustments`, `GET /approvals/pending`, `POST /approvals/:id/approve`, `POST /approvals/:id/reject`
- Leaves: `POST /leaves`, `GET /leaves?userId=...`
- Policies: `GET /policies`, `PUT /policies`
- Engagement: `GET /engagement/weekly`

---

## 🔒 Segurança
- Hash de senha (bcrypt/argon2), JWT, CORS restrito, validação de entrada (Zod/Joi).

---

## 📦 Entrega
- Publique em um repositório GitHub **público** chamado **controle-de-ponto** e inclua README atualizado.

# Controle de Ponto (Template)
> Teste técnico — Desenvolvedor(a) Fullstack Node.js/Express/JavaScript/React/Python/MongoDB (Pleno e Sênior)

Este repositório é um **template** para iniciar o MVP de um **Sistema de Controle de Ponto** que contém uma coleção de Endpoints sugeridos para testes no Postman na pasta **docs/**

## ✅ Objetivo
Desenvolver um Protótipo de registro de ponto online com espelho de ponto responviso para web/mobile

---

## 🧱 Stack
- **Backend**: Node.js (Express) **ou** Python (FastAPI) - JavaScript/TypeScript
- **Frontend**: (React)
- **Banco**: MongoDB

---

## 📑 Modelo de Espelho de Ponto Sugerido
Espelho de ponto estruturado: 
1. **Identificação do colaborador** Nome Completo, CPF / Matrícula / Cargo / Setor 
2. **Informações do período** mês de referência e dias da semana (01 a 31)
3. **Jornada diária** horário de entrada e saída, intervalo intrajornada (ex.: almoço), saídas e retornos intermediários (se houver) 
4. **Totais por dia** horas normais trabalhadas, horas extras, atrasos e faltas, banco de horas (saldo do dia) 
5. **Totais consolidados do mês** horas normais, horas extras, atrasos / faltas, banco de horas acumulado 

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

## 📦 Entrega até o dia 21/09/2025
- Publique um repositório **público** no GitHub chamado **controle-de-ponto** e inclua README atualizado.
- Envie um e-mail para **ti@grupolocar.com**
```bash
Assunto: "Desenvolvedor(a) Fullstack Node.js/Express/JavaScript/React/Python/MongoDB (Pleno e Sênior)"
- Nome completo
- Link de seu repositório
```


Boa sorte!!! 

export default function Home() {
  const api = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'
  return (
    <main style={{fontFamily:'system-ui, Arial', padding:'2rem'}}>
      <h1>Controle de Ponto — MVP</h1>
      <p>Template de frontend (Next.js) para o teste técnico.</p>
      <ul>
        <li>API base: <code>{api}</code></li>
        <li>Endpoints principais: /auth/login, /records, /mirror...</li>
      </ul>
      <p>Edite esta página em <code>frontend/pages/index.jsx</code>.</p>
    </main>
  )
}

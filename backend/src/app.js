import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.use(express.json({ limit: '5mb' }))

// Mongo
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/controleponto'
mongoose.connect(uri).then(() => console.log('[mongo] connected')).catch(err => console.error('[mongo] error', err))

// Health
app.get('/health', (_req, res) => res.json({ ok: true, ts: new Date().toISOString() }))

// Auth (stub)
app.post('/auth/register', (req, res) => res.status(201).json({ message: 'register stub', payload: req.body }))
app.post('/auth/login', (req, res) => res.json({ token: 'stub.jwt.token' }))
app.get('/me', (_req, res) => res.json({ id: 'user_stub', role: 'employee' }))

// Records (stub)
app.post('/records', (req, res) => res.status(201).json({ message: 'record created', payload: req.body }))
app.get('/records', (req, res) => res.json({ items: [], query: req.query }))

// Mirror (stub)
app.get('/mirror', (req, res) => res.json({ month: req.query.month, totalHours: 0, balance: 0 }))

// Adjustments & Approvals (stub)
app.post('/adjustments', (req, res) => res.status(201).json({ message: 'adjustment requested' }))
app.get('/approvals/pending', (_req, res) => res.json({ items: [] }))
app.post('/approvals/:id/approve', (req, res) => res.json({ id: req.params.id, status: 'APPROVED' }))
app.post('/approvals/:id/reject', (req, res) => res.json({ id: req.params.id, status: 'REJECTED' }))

// Leaves (stub)
app.post('/leaves', (req, res) => res.status(201).json({ message: 'leave created' }))
app.get('/leaves', (req, res) => res.json({ items: [], query: req.query }))

// Policies (stub)
app.get('/policies', (_req, res) => res.json({ autoApprove: { geoRecords: true, manualAdjustments: false, offlineRecords: false, medicalCertificates: false } }))
app.put('/policies', (req, res) => res.json({ updated: req.body }))

// Engagement (stub)
app.get('/engagement/weekly', (_req, res) => res.json({ punctualityRate: 0.95 }))

const port = process.env.API_PORT || 4000
app.listen(port, () => console.log(`[api] listening on http://localhost:${port}`))

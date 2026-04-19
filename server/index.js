import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import groqRoutes from './routes/groq.js'
import schemeRoutes from './routes/schemes.js'
import explainRoutes from './routes/explain.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/groq', groqRoutes)
app.use('/api/schemes', schemeRoutes)
app.use('/api/explain', explainRoutes)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

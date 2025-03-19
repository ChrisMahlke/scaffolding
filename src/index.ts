import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes' // Import user routes

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// ✅ Middleware
app.use(express.json()) // Parse JSON requests
app.use(cors()) // Enable CORS
app.use(helmet()) // Security headers
app.use(compression()) // Compress responses

// ✅ Routes
app.use('/users', userRoutes)

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('🚀 Welcome to the TypeScript Express API!')
})

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`)
})

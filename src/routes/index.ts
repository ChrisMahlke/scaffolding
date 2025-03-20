import { Router } from 'express'
import userRoutes from './userRoutes' // Import other routes

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: '🚀 API is running!' })
})

// Add other routes
router.use('/users', userRoutes)

export default router

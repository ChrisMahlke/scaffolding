import request from 'supertest'
import { app } from '../index' // Ensure this is the correct path

const API_KEY = 'secret123' // Ensure this matches your .env value

describe('User Routes', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users').set('x-api-key', API_KEY) // ✅ Added API Key Header

    expect(res.status).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body).toEqual([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ])
  })

  it('should return a single user', async () => {
    const res = await request(app).get('/users/1').set('x-api-key', API_KEY) // ✅ Added API Key Header

    expect(res.status).toBe(200)
    expect(res.body.name).toBe('John Doe')
  })

  it('should return 404 for a non-existent user', async () => {
    const res = await request(app).get('/users/99').set('x-api-key', API_KEY) // ✅ Added API Key Header

    expect(res.status).toBe(404)
    expect(res.body.message).toBe('User not found')
  })
})

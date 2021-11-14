/* eslint-env jest */
const request = require('supertest')
const app = require('../../src/app')

describe('Tests for addresses', () => {
  test('should return 200 if address exist in database', async () => {
    const response = await request(app).get('/api/addresses').query({ zip_code: '12232883' })
    expect(response.statusCode).toBe(200)
  })

  test('should return 200 if CEP replaced by zeros exist in database', async () => {
    const response = await request(app).get('/api/addresses').query({ zip_code: '12232882' })
    expect(response.statusCode).toBe(200)
  })

  test('should return 400 if is an invalid CEP', async () => {
    const response = await request(app).get('/api/addresses').query({ zip_code: '1313113x' })
    expect(response.statusCode).toBe(400)
  })

  test('should return 404 if CEP not exists in db', async () => {
    const response = await request(app).get('/api/addresses').query({ zip_code: '13131133' })
    expect(response.statusCode).toBe(404)
  })
})

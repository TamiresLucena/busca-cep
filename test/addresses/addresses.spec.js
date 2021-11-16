/* eslint-env jest */
const request = require('supertest')
const app = require('../../src/app')

let token

beforeAll((done) => {
  request(app)
    .post('/authentication/authenticate')
    .send({
      login: 'tlucena',
      password: 'Lu1z@'
    })
    .end((err, response) => {
      token = response.body.token
      if (!err) done()
    })
})

const createRequester = () => {
  const app = require('../../src/app')
  return request(app)
}

describe('Tests for addresses', () => {
  const enderecos = [
    {
      id: 1,
      zip_code: '12232883',
      location: 'Gentil Raymundo da Silva',
      district: 'Dom Pedro II',
      city: 'São José dos Campos',
      state: 'São Paulo'
    },
    {
      id: 2,
      zip_code: '12232880',
      location: 'Agosto Diamante de Souza',
      district: 'Dom Pedro II',
      city: 'São José dos Campos',
      state: 'São Paulo'
    }
  ]
  beforeAll(() => {
    jest.doMock('../../src/domains/address/getAddressDB', () => {
      return (zipCode) => {
        const endereco = enderecos.find(endereco => endereco.zip_code === zipCode)
        if (endereco !== undefined) return endereco
        return null
      }
    })
  })

  beforeEach(() => jest.resetModules())

  test('should return 401 if user is not authorized ', async () => {
    const requester = createRequester()
    const response = await requester.get('/addresses/address').query({ zip_code: '12232883' })
    console.log(response.body)
    expect(response.statusCode).toBe(401)
  })

  test('should return 200 if address exist in database', async () => {
    const requester = createRequester()
    const response = await requester.get('/addresses/address').query({ zip_code: '12232883' }).set('Authorization', `Bearer ${token}`)
    console.log(response.body)
    expect(response.statusCode).toBe(200)
  })

  test('should return 200 if CEP replaced by zeros exist in database', async () => {
    const requester = createRequester()
    const response = await requester.get('/addresses/address').query({ zip_code: '12232882' }).set('Authorization', `Bearer ${token}`)
    console.log(response.body)
    expect(response.statusCode).toBe(200)
  })

  test('should return 400 if is an invalid CEP', async () => {
    const requester = createRequester()
    const response = await requester.get('/addresses/address').query({ zip_code: '1313113x' }).set('Authorization', `Bearer ${token}`)
    console.log(response.body)
    expect(response.statusCode).toBe(400)
  })

  test('should return 404 if CEP not exists in db', async () => {
    const requester = createRequester()
    const response = await requester.get('/addresses/address').query({ zip_code: '12232000' }).set('Authorization', `Bearer ${token}`)
    console.log(response.body)
    expect(response.statusCode).toBe(404)
  })
})

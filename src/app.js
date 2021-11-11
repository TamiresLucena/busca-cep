const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require("./swagger_output.json");


const app = express()

app.get('/health', (req, res) => {
  const data = {
    message: 'Servidor ativo!',
    date: new Date(),
    uptime: process.uptime()
  }

  res.status(200).json(data)
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}!`)
})

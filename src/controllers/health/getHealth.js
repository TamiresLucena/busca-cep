module.exports = async (req, res) => {
  try {
    const data = {
      message: 'Servidor ativo!',
      date: new Date(),
      uptime: process.uptime()
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(error.status || 500).json({
      error: {
        message: error.message
      }
    })
  }
}

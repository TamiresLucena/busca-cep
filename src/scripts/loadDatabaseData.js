const db = require('../database')

const loadDatabaseData = async () => {
  await db('users').insert(
    {
      name: 'Tamires Lucena',
      login: 'tlucena',
      password: '$argon2i$v=19$m=4096,t=3,p=1$rg9lVxtjrRGPDmWaBfMPBA$8v6/jrIkDBQL0cxhYhyyezFgYKguoQwYHwURAyl+pMk'
    }
  )

  await db('addresses').insert([
    {
      zip_code: '12232883',
      location: 'Gentil Raymundo da Silva',
      district: 'Dom Pedro II',
      city: 'São José dos Campos',
      state: 'São Paulo'
    },
    {
      zip_code: '12232000',
      location: 'Agosto Diamante de Souza',
      district: 'Dom Pedro II',
      city: 'São José dos Campos',
      state: 'São Paulo'
    }
  ])

  db.destroy()
}

loadDatabaseData()

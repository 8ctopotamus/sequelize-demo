require('dotenv').config()
const express = require('express')
const sequelize = require('./config/connection')
const routes = require('./routes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

sequelize.sync({ force: true }).then(() => {
  console.log(`Sequelize connected!`)
  
  app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
})

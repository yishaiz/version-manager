const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

const apiRoute = require('./app/routes/versionRoute')

app.use(express.static('dist'))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/api', apiRoute)

const port = process.env.PORT || 3000

const server = app.listen(port, () => console.log(`Server listening on ${port}`))

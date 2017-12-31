const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

const versionRoute = require('./app/routes/versionRoute')

app.use(express.static('dist'))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/version', versionRoute)

const port = process.env.PORT || 5000

const server = app.listen(port, () => console.log(`Server listening on ${port}`))

const express = require('express')

const router = express.Router()

const appController = require('../controller/appController')

router.post('/app-list', async (req, res, next) => {

  try {
    const applications = await appController.getApplicationsList()

    console.log('applications  ', applications)

    res.send(applications)
  }
  catch (error) {
    console.log('error', error)

    res
      .status(400)
      .send({
        error : error,
        message : error.toString()
      })
  }
})

router.post('/add-application', async (req, res, next) => {

  try {
    const appName = req.body.appName.toString()

    const result = await appController.addApplication(appName)

    console.log('result ', result)


    res.send({ result })
  }
  catch (error) {
    console.log('error', error)

    res
      .status(400)
      .send({
        error : error,
        message : error.toString()
      })
  }
})


module.exports = router

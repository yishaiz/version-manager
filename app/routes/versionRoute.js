const express = require('express')

const router = express.Router()

const versionController = require('../controller/versionController')


router.post('/next-version', async (req, res, next) => {

  try {
    const nextVersion = await versionController.getNextVersion(appName)

    console.log('nextVersion ', nextVersion)


    res.send(nextVersion)
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

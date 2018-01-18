const express = require('express')

const router = express.Router()

const versionController = require('../controller/versionController')


router.get('/:app/versions', async (req, res, next) => {
  try {
    const appName = req.params.app.toString()

    console.log('appName', appName)

    const versions = await versionController.getVersions(appName)

    console.log('versions', versions)

    res.send(versions)
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

router.get('/:app/next-version', async (req, res, next) => {
  try {
    const appName = req.params.app.toString()

    console.log('appName', appName)

    const nextVersion = await versionController.getNextVersion(appName)

    console.log('nextVersion ', nextVersion)

    res.send({ nextVersion })
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

router.get('/:app/latest-version', async (req, res, next) => {
  try {
    const appName = req.params.app.toString()
    console.log('appName', appName)

    const nextVersion = await versionController.getLatestVersion(appName)

    console.log('nextVersion ', nextVersion)

    res.send({ nextVersion })
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


// router.get('/next-version', async (req, res, next) => {
router.post('/next-version', async (req, res, next) => {

  try {
    // const appName='xxx'//todo from client
    const appName = req.body.appName.toString();
    console.log('appName', appName)

    const nextVersion = await versionController.getNextVersion(appName)

    console.log('nextVersion ', nextVersion)


    res.send({ nextVersion })
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

router.post('/latest-version', async (req, res, next) => {

  try {
    // const appName='xxx'//todo from client
    const appName = req.body.appName.toString();
    console.log('appName', appName)

    const latestVersion = await versionController.getLatestVersion(appName)

    console.log('latestVersion ', latestVersion)

    res.send({ latestVersion })
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

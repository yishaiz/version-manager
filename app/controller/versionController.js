const config = require('../../app.config')
const express = require('express')


const getNextVersion = async (appName) => {
  const nextVersion = await getNextVersionFromDb()

  return nextVersion
}


const getNextVersionFromDb = async (appName) => {
  const nextVersion = await 'aaa'
  return nextVersion
}


module.exports = {
  getNextVersion
};


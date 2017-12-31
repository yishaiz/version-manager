const config = require('../../app.config')
const express = require('express')

const applicationsList = [ 'FE', 'BO', 'CasapAdmin' ]

const getApplicationsList = async () => {
  const nextVersion = await getApplicationsListFromDb()

  return nextVersion
}

const getApplicationsListFromDb = async () => {
  const nextVersion = await 'aaa'
  return applicationsList
}

const addApplication = async (appName) => {
  const nextVersion = await 'aaa'
  applicationsList.push(appName)
  return applicationsList
}

module.exports = {
  getApplicationsList,
  addApplication
};


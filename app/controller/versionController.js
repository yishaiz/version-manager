const config = require('../../app.config')
const express = require('express')

// const versions = [ 1.0 ,  ,1.1 , 2.0 ]
const versions = [ 1, 2, 3 ]
// const versionValues  = versions.map(v=>Number(v))

const getMaxVersion = async (appName) => {
  const maxVersion = await getMaxVersionFromDb()

  return maxVersion
}

const getNextVersion = async (appName) => {
  // const nextVersion = await getNextVersionFromDb()
  const maxVersion = await getMaxVersionFromDb()
  const nextVersion = maxVersion + 1
  versions.push(nextVersion)
  return nextVersion
}

const getNextVersionFromDb = async (appName) => {
  const nextVersion = await 'aaa'
  return nextVersion
}

const getMaxVersionFromDb = async (appName) => {
  // const temp = await 'aaa'
  const maxValue = Math.max.apply(null, versions)
  return maxValue
}


module.exports = {
  getNextVersion
};


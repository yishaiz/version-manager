const config = require('../../app.config')
const express = require('express')

const versionsList = [
  { 'Id' : 1, 'AppName' : 'FE', 'VersionId' : 1, 'details' : 'new app', 'createDate' : new Date().setDate(1) },
  { 'Id' : 2, 'AppName' : 'FE', 'VersionId' : 1.2, 'details' : 'new ver', 'createDate' : new Date().setDate(10) },
  { 'Id' : 3, 'AppName' : 'FE', 'VersionId' : 2, 'details' : 'prod', 'createDate' : new Date().setDate(20) },
  { 'Id' : 4, 'AppName' : 'BO', 'VersionId' : 1, 'details' : 'second app', 'createDate' : new Date().setDate(12) },
  { 'Id' : 5, 'AppName' : 'BO', 'VersionId' : 2, 'details' : 'build json', 'createDate' : new Date().setDate(13) },
  { 'Id' : 6, 'AppName' : 'Admin', 'VersionId' : 1, 'details' : 'new manager', 'createDate' : new Date().setDate(14) },
  { 'Id' : 7, 'AppName' : 'Orders', 'VersionId' : 1, 'details' : 'uglify', 'createDate' : new Date().setDate(15) },
  { 'Id' : 8, 'AppName' : 'Orders', 'VersionId' : 1, 'details' : 'using ...', 'createDate' : new Date().setDate(16) },
  { 'Id' : 9, 'AppName' : 'Orders', 'VersionId' : 3, 'details' : 'bla bla', 'createDate' : new Date().setDate(18) },
  { 'Id' : 10, 'AppName' : 'Orders', 'VersionId' : 4, 'details' : 'more', 'createDate' : new Date().setDate(20) }
]

// [ 'FE', 'BO', 'CasapAdmin' ]

// const versions = [ 1.0 ,  ,1.1 , 2.0 ]
// const versions = [ 1, 2, 3 ]
// const versionValues  = versions.map(v=>Number(v))


const getVersions = async (appName) => {
  const versions =
    versionsList.filter(version => version.AppName == appName)

  return versions
}

const getMaxVersion = async (appName) => {
  const versions = await getVersions(appName)

  const maxVersion =
    versions
      .map(version => version.VersionId)
      .reduce((a, b) => Math.max(a, b))

  //await getMaxVersionFromDb()
  /*const maxValue = */
  return maxVersion
}

/*

const getMaxVersionFromDb = async (appName) => {
  // const temp = await 'aaa'
  // const maxValue = Math.max.apply(null, versions)
  const maxValue = versions.reduce((a, b) => Math.max(a, b))
  return maxValue
}
*/

const getNewId = () => {
  const maxId = versionsList.map(version => version.Id)
    .reduce((a, b) => Math.max(a, b))

  return maxId + 1
}

const getNextVersion = async (appName) => {
  const maxVersion = await getMaxVersion(appName)
  const nextVersion = maxVersion + 1

  const newId = getNewId()

  const newVersion =
    { 'Id' : newId, 'AppName' : appName, 'VersionId' : nextVersion, 'details' : '-------', 'createDate' : new Date() }

  versionsList.push(newVersion)

  return nextVersion
}

/*
const getNextVersionFromDb = async (appName) => {
  const nextVersion = await 'aaa'
  return nextVersion
}
*/


module.exports = {
  getVersions,
  getNextVersion,
  getLatestVersion : getMaxVersion,
};


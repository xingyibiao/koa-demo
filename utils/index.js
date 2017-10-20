'use strict'
const fs = require('fs')
const path = require('path')

function readFilePromise(path, config = {encoding: 'utf-8'}) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, config, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
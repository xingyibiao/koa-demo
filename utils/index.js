/*
 * @Author: xingyibiao
 * @Date: 2017-10-23 14:31:14
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:33:16
 */
const fs = require('fs')

/**
 * readFile的promise封装
 * @param {string} path
 * @param {object} [config={encoding: 'utf-8'}]
 * @returns data
 */
function readFilePromise(path, config = { encoding: 'utf-8' }) {
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

exports.readFilePromise = readFilePromise

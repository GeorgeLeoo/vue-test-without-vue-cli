const path = require('path')

/**
 * 项目根目录
 * @param {*} dir 
 */
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve
}
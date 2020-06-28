const path = require('path')

/**
 * 相对于根目录设置路径，否则webpack配置文件放到build文件夹中就会找不到路径
 * @param {*} dir 
 */
function resolve(dir) {
  console.log('env', process.env.VUE_APP_BASE_API);
  
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve
}
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const {log} = require('./utils')

module.exports = async name => {
  clear()
  const welcome = `Welcome ${name}`.toUpperCase()
  const data = await figlet(welcome)
  log(data)
}
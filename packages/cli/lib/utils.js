const chalk = require('chalk')
const fs = require('fs')

module.exports.log = content => console.log(chalk.green(content))
module.exports.warning = content => console.log(chalk.yellow(content))

const {resolve} = require('path')

const packages = () => {
  try {
    return fs.readdirSync(resolve('./') + '\\package.json')
  } catch (_) {
    return {
      ['short-name']: 't',
      ['name']: 't-ui'
    }
  }
}

module.exports.packages = packages

module.exports.packagesFromKey = key => packages()[key]

module.exports.upperFirstChar = word => {
  if (typeof word === 'string' && word.length) {
    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length)
  }
  return word
}

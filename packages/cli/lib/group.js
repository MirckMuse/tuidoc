const {
  resolve,
  join
} = require('path')

const fs = require('fs')
const clear = require('clear')

const {
  upperFirstChar
} = require('./utils')

const getPackagesName = path => {
  if (fs.existsSync(path)){
    return JSON.parse(fs.readFileSync(path, 'utf-8')).name || ''
  }
}

module.exports = function () {
  clear()

  const packagesPath = resolve('./packages')
  const componentDirList = fs.readdirSync(packagesPath).filter(dir => dir !== 'cli')

  const {
    importContentList,
    registerComponentList
  } = componentDirList
    .reduce(
      (result, dir) => {
        const packagesName = getPackagesName(join(packagesPath, dir, 'package.json'))
        if (packagesName) {
          const component = upperFirstChar(dir)
          result.registerComponentList.push(component)
          result.importContentList.push(`import ${component} from '${packagesName}'`)
        }
        return result
      },
      {
        importContentList: [],
        registerComponentList: []
      }
    )

  const content = `import {App} from "vue"
${importContentList.join('\n')}

const components = [
${registerComponentList.map(component => '\t' + component).join('\n')}
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default install
  `
  fs.writeFileSync(join(packagesPath, 'index.ts'), content)
}
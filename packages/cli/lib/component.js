const clear = require('clear')
const handlebars = require('handlebars')
const {resolve, dirname} = require('path')
const {
  packages,
  warning,
  log
} = require('./utils')
const fs = require('fs')
const getNames = name => {
  const componentName = name.toLowerCase()
  const packageContent = packages()

  const shortName = packageContent['short-name']
  const groupName = packageContent['name']

  const vueComponentName =
    shortName.toUpperCase() +
    componentName.slice(0, 1).toUpperCase() +
    componentName.slice(1, componentName.length)

  const projectName = '@' + groupName + '/' + componentName

  return {
    vueComponentName,
    componentName,
    projectName
  }
}

/**
 * 模板编译
 * @param meta
 * @param targetPath
 * @param templatePath
 */
function compile(meta, targetPath, templatePath) {
  if (!fs.existsSync(templatePath)) {
    warning('请确认是否存在对应的模板（文件/文件夹）：' + templatePath)
    return
  }

  // 创建文件
  const content = fs.readFileSync(templatePath).toString()
  const result = handlebars.compile(content)(meta)
  if (!fs.existsSync(dirname(targetPath))) {
    fs.mkdirSync(dirname(targetPath))
  }
  fs.writeFileSync(targetPath, result)
  log(`${targetPath} 创建成功`)
}

module.exports = async name => {
  clear()

  // 如果项目没有packages文件夹，则创建packages文件夹
  if (!fs.existsSync('./packages')) {
    // 创建packages文件夹
    fs.mkdirSync('packages')
  }

  // 判断是否存在组件文件夹
  //    有则抛出异常
  //    无则创建该组件目录
  const componentPath = `./packages/${name.toLowerCase()}`
  if (fs.existsSync(componentPath)) {
    warning('已经存在目标组件文件夹，手动删除后重新执行命令')
    return
  } else {
    fs.mkdirSync(componentPath)
  }

  // 创建组件文件夹
  const meta = getNames(name)
  const targetPrePath = resolve('./') + `/packages/${name}`
  const templatePrePath = __dirname + '/../template/component'
  const compilePaths = [
    [`/__test__/${name}.test.js`, `/__tests__/componentName.test.js.hbs`],
    [`/src/index.vue`, `/src/index.vue.hbs`],
    [`/index.ts`, `/index.ts.hbs`],
    [`/package.json`, `/package.json.hbs`],
    [`/README.md`, `/README.md.hbs`],
  ]
  compilePaths.forEach(([targetPath, templatePath]) => {
    compile(meta, targetPrePath + targetPath, templatePrePath + templatePath)
  })
}

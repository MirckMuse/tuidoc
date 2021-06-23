#!/usr/bin/env node
const commander = require('commander')
const packages = require('../package.json')

commander.version(packages.version)

// 生成项目的命令
commander
  .command('init <name>')
  .description('init a UI project based vue and tailwindcss')
  .action(require('../lib/init'))

// 生成组件的命令
commander
  .command('component <name>')
  .description('create a component to packages')
  .action(require('../lib/component'))

commander
  .command('group')
  .description('group component')
  .action(require('../lib/group'))

commander.parse(process.argv)
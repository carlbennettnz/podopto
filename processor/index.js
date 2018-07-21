#!/usr/bin/env node

const program = require('commander')

const package = require('./package.json')

const add = require('./menu/add')
const rm = require('./menu/rm')
const list = require('./menu/list')

const refresh = require('./cook/refresh')

program.version(package.version)

program.command('add <course> <url>').action(add)
program.command('rm <course>').action(rm)
program.command('list <course>').action(list)

program.command('refresh <course>').action(refresh)

program.parse(process.argv)

module.exports = {
  add,
  rm,
  list,
  refresh
}

#!/usr/bin/env node
'use strict';
var yargs = require('yargs');
var colors = require('colors');
var { src, dest } = require('gulp');

yargs.command(
  'new [name]',
  'Create new CLI app',
  () => { },
  args => {
    if (!args.name) {
      console.log(colors.red('Please provide name for [CLI App]'));
      process.exit(1);
    }
    const cwd = process.cwd();
    src(['**/*', '!node_modules/**/*'], { cwd: __dirname + '/../' }).pipe(dest(`${cwd}/${args.name}`));
  },
);
yargs.option('verbose', {
  alias: 'v',
  default: false,
}).argv;
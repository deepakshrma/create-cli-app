#!/usr/bin/env node
const yargs = require('yargs');
const fs = require('fs');
fs.readdirSync(__dirname + '/packages')
  .filter((x: string) => x.match(/^plugins/))
  .forEach((dirName: string) => {
    console.log(dirName)
    require(__dirname + '/packages/' + dirName).build(yargs);
  });

yargs.option('verbose', {
  alias: 'v',
  default: false,
}).argv;

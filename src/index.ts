#!/usr/bin/env node
import fs from 'fs';
import yargs from 'yargs';
fs.readdirSync(__dirname + '/packages')
	.filter((x: string) => x.match(/^plugins/))
	.forEach((dirName: string) => {
		/* tslint:disable:no-var-requires */
		require(__dirname + '/packages/' + dirName).build(yargs);
	});
/* tslint:disable:no-unused-expression */
yargs.option('verbose', {
	alias: 'v',
	default: false,
}).argv;

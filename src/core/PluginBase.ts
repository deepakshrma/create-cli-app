import colors_ from 'colors/safe';
import gulp_, { Gulp } from 'gulp';

colors_.setTheme({
	input: 'grey',
	silly: 'rainbow',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red',
});
export interface IPlugin {
	run: (...args: any) => void;
}
export class PluginBase {
	public gulp: Gulp;
	public colors: any;
	constructor() {
		this.gulp = gulp_;
		this.colors = colors_;
	}
	public toString() {
		const funcNameRegex = /function (.{1,})\(/;
		const results = funcNameRegex.exec(this.constructor.toString());
		return results && results.length > 1 ? results[1] : '';
	}
}

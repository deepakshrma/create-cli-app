import gulp, { Gulp } from 'gulp';
var colors = require('colors/safe');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
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
    public _gulp: Gulp;
    public _colors: {
        silly: any;
        input: any;
        verbose: any;
        prompt: any;
        info: any;
        data: any;
        help: any;
        warn: any;
        debug: any;
        error: any;
    };
    constructor() {
        this._gulp = gulp;
        this._colors = colors;
    }
    toString() {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((this).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}

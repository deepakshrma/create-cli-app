import { PluginBase, IPlugin } from '../../core/PluginBase';
import { Argv } from 'yargs';

class CorePlugin extends PluginBase implements IPlugin {
    run() {
        const { src, dest } = this._gulp;
        const { info } = this._colors;
        function copy() {
            return src('src/**/*').pipe(dest('output/'));
        }
        console.log(info("test"))
        copy();
    }
}
export const build = (yargs: Argv) => {
    yargs.command(
        'serve [port]',
        'start the server',
        (argv: Argv) => {
            argv.positional('port', {
                describe: 'port to bind on',
                default: 5000,
            });
            return argv
        },
        (argv: any) => {
            const plugin = new CorePlugin();
            if (argv.verbose) console.info(`runing plugin : ${plugin}`);
            plugin.run();
        }
    );
};
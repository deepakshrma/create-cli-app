import { Argv } from 'yargs';
import { IPlugin, PluginBase } from '../../core/PluginBase';

class CorePlugin extends PluginBase implements IPlugin {
	public run() {
		const { src, dest } = this.gulp;
		const { info } = this.colors;
		function copy() {
			return src('src/**/*').pipe(dest('output/'));
		}
		console.info(info('test'));
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
			return argv;
		},
		(argv: any) => {
			const plugin = new CorePlugin();
			if (argv.verbose) {
				console.info(`runing plugin : ${plugin}`);
			}
			plugin.run();
		},
	);
};

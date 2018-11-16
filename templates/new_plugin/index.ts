import { PluginBase, IPlugin } from '../../core/PluginBase';
import { Argv } from 'yargs';

class <Name>Plugin extends PluginBase implements IPlugin {
  run(name: string) {
    console.log('runing...' + name);
  }
}
export const build = (yargs: Argv) => {
  yargs.command(
    '<name>',
    '<Name> is new plugin',
    (argv: Argv) => {
      argv.positional('name', {
        describe: 'default plugin name',
        default: 'default',
      });
      return argv;
    },
    (argv: any) => {
      const plugin = new <Name>Plugin();
      if (argv.verbose) console.info(`[verbose]runing plugin : ${plugin}`);
      plugin.run(argv.name);
    },
  );
};

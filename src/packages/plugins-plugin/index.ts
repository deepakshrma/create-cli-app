import { PluginBase, IPlugin } from '../../core/PluginBase';
import { Argv } from 'yargs';
import replace from 'gulp-replace';

class CreatePlugin extends PluginBase implements IPlugin {
  run(name: string) {
    const { src, dest } = this._gulp;
    name = name.toLowerCase()
    const capsName = name.charAt(0).toUpperCase() + name.substr(1);
    src('templates/new_plugin/*')
      .pipe(replace(/\<Name>/g, capsName))
      .pipe(replace(/\<name>/g, name))
      .pipe(dest(`src/packages/plugins-${name}`))
  }
}
export const build = (yargs: Argv) => {
  yargs.command(
    'np [name]',
    'create new plugin',
    (argv: Argv) => {
      argv.positional('name', {
        describe: 'default plugin name',
        default: 'new-plugin',
      });
      return argv;
    },
    (argv: any) => {
      const plugin = new CreatePlugin();
      if (argv.verbose) console.info(`runing plugin : ${plugin}`);
      plugin.run(argv.name);
    },
  );
};

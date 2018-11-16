## create-cli-app

This is cli tool to create nodejs cli tool. It uses typescript for scaffolding. Easy to use and Easy to add new command. Generated CLI app supports gulp out of box.

### How to Install
```bash
npm install -g create-cli-app
// OR
npm install -g https://git@github.com/deepakshrma/create-cli-app.git
```

### How to create CLI app

```bash
create-cli-app new [app-name-here]
```

Once app create, You can navigate to folder and see the generated code.

**[App Structure]**

```
|---src: source code of cli app
    |---packages: induvidule modules, command[SOLID]
    |---core: Base code, Utils classes
|---templates: Use templates folder for copy paste files
```

#### Supported Basic commands

```bash
// Build cli src code
npm run build
// test cli src code
npm run test
// format cli src code
npm run format
// check lint cli src code
npm run lint
```

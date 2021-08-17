# HSQL Language Extension


## Features



## Requirements


- VSCode
- ECL Client tools - For resolving the standard library and bundle paths

## Extension Settings

```
.
├── package.json // The extension manifest.
├── client // Language Client
│   ├── src
│   │   └── extension.ts // Language Client entry point
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```

## Known Issues

TBD

## Running the Sample

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Install the `hsqlt` module, or link it as required (Refer to the documentation on `hsqlt` if unsure)
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`

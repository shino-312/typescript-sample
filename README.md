# typescript-sample

Snippets or sample code of TypeScript.

## Environment setup

### Install [NVM](https://github.com/nvm-sh/nvm)

```sh
# Download NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# Add to ~/.bashrc or .zshrc etc.
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Get latest version
nvm install --lts

# or specific verison
nvm install v12.14.1

# or show list of available versions
nvm iist-remote
```

### Create project

```sh
# Create directory and move there
mkdir project_hoge && cd $_

# Create package.json
npm init -y
```

### Install frequently used packages

```sh
npm install -D typescript @types/node

# Express
npm install -S express
npm install -D @types/express

# SocketIO
## Be sure the version you use is v2 or v3 as they're not compatible
npm install -S socket.io socket.io-client
npm install -D @types/socket.io @types/socket.io-client

# ESLint (https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier
npm install -D prettier eslint-config-prettier

# Others
npm install -S dotenv                     # .env file loader
npm install -S winston                    # logger
npm install -D ts-jest jest@types/jest    # unit test tool

# Create tsconfig.json
npx tsc --init

# Create .eslintrc.json
npx eslint --init
```

### Edit tsconfig.json

1. `"include": ["src"],`を追加して`src`ディレクトリをビルド対象にする
2. `"outDir": "./dist"`に変更してビルド結果を`dist`ディレクトリに出力する

他は状況に応じて。 

### Setup Jest
```sh
npx ts-jest config:init
```

### Edit package.json
```json
  "scripts": {
    "build": "npm run lint && tsc",
    "start": "node -r dotenv/config dist/index.js",
    "lint": "eslint \"src/**/*.ts\"",
    "fmt": "prettier --write \"src/**/*.ts\"",
    "test": "jest"
  },
```

globは`\"`で囲わないと、シェルによって展開されてしまうので環境によって結果が異なる。

## Basic Syntax

See [sample](./dist/index.ts)

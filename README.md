# safe-node-require

[![NPM version](https://img.shields.io/npm/v/safe-node-require.svg?style=flat)](https://npmjs.com/package/safe-node-require) [![NPM downloads](https://img.shields.io/npm/dm/safe-node-require.svg?style=flat)](https://npmjs.com/package/safe-node-require) [![Build Status](https://img.shields.io/circleci/project/egoist/safe-node-require/master.svg?style=flat)](https://circleci.com/gh/egoist/safe-node-require) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add safe-node-require
```

## Usage

```js
const req = require('safe-node-require')

// foo.js does not exist
req('./foo')
//=> null

// bar.js exists
req('./bar')
//=> {} the module
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**safe-node-require** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/safe-node-require/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)

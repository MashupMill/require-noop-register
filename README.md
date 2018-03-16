# require-noop-register

[![npm](https://img.shields.io/npm/v/require-noop-register.svg?style=for-the-badge)](https://www.npmjs.com/package/require-noop-register)
[![npm](https://img.shields.io/npm/dm/require-noop-register.svg?style=for-the-badge)](https://npmjs.org/package/require-noop-register)
[![GitHub issues](https://img.shields.io/github/issues-raw/MashupMill/require-noop-register.svg?style=for-the-badge)](https://github.com/MashupMill/require-noop-register/issues)

[![Travis](https://img.shields.io/travis/MashupMill/require-noop-register.svg?style=for-the-badge)](https://travis-ci.org/MashupMill/require-noop-register)
[![David](https://img.shields.io/david/MashupMill/require-noop-register.svg?style=for-the-badge)](https://david-dm.org/MashupMill/require-noop-register)

Inhibits `require` on selected extensions.

Useful in isomorphic setups, where - for instance - we want `require('asset.png')` to use a webpack loader on the client, but result in a noop on the server.

## Install

```
npm install --save-dev require-noop-register
```

## Usage in mocha

From the CLI
```
mocha --require require-noop-register
```

In the `mocha.opts`

```
--require require-noop-register
```

If you don't want it to apply to all supported extensions, you may register individual groups or extensions using something like:

```
--require require-noop-register/css
```

```
--require require-noop-register/stylesheets
```

The currently supported extensions are:

| Extension | Group |
| --- | --- |
| `css` | `stylesheets` |
| `less` | `stylesheets` |
| `scss` | `stylesheets` |
| `gif` | `graphics` |
| `jpg` | `graphics` |
| `png` | `graphics` |
| `pdf` | `documents` |
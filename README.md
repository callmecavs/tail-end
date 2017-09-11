# tail-end

[![tail-end on NPM](https://img.shields.io/npm/v/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![tail-end Downloads on NPM](https://img.shields.io/npm/dm/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Promise-wrapped element transitions.

## Install

```sh
$ npm i tail-end --save
```

## API

### .tailend(node[, css])

Adds a Promise-wrapped `transitionend` event handler to the node. It resolves, and removes itself, when the first `transitionend` event is triggered.

```javascript
import transition from 'tail-end'

// cache the node
const node = document.getElementById('example')

// bind the transitionend event (will only fire once)
transition(node)
  .then(() => console.log('All done.'))
  .catch(error => console.log('node or css param invalid: ', error))

// do something to trigger it
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea

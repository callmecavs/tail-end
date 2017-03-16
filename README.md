# tail-end

[![tail-end on Travis](https://img.shields.io/travis/callmecavs/tail-end.svg?style=flat-square)](https://travis-ci.org/callmecavs/tail-end) [![tail-end on NPM](https://img.shields.io/npm/v/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

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

Optionally, pass CSS (as a string or object) to apply to the node. This CSS is added in the next frame, and will trigger the `transitionend` handler, eventually leading to the Promise resolving.

```javascript
const cssString = 'transition: transform 1s ease; transform: translate3d(100px, 0, 0);'

const cssObj = {
  transition: 'transform 1s ease',
  transform: 'translate3d(200px, 0, 0)'
}

transition(node, cssString).then(() => console.log('CSS string added.'))
transition(node, cssObj).then(() => console.log('CSS object added.'))
```

## See Also

* [selly](https://github.com/callmecavs/selly) - Convenient and optimized DOM element selection.

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea

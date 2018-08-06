# tail-end

[![tail-end on NPM](https://img.shields.io/npm/v/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![tail-end Downloads on NPM](https://img.shields.io/npm/dm/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Promise-wrapped animations and transitions.

## Install

```sh
$ npm i tail-end --save
```

## API

### .animationEnd(node)

Adds a Promise-wrapped `animationend` event handler to the node.

It resolves and removes itself when the next `animationend` event is triggered.

```javascript
import { animationEnd } from 'tail-end'

// cache the node
const node = document.getElementById('example')

// bind the animationend event
animationEnd(node)
  .then(() => console.log('Animation done.'))
  .catch(error => console.log(`Invalid node: ${error}`))

// TODO: something to trigger the event
```

### .transitionEnd(node)

Adds a Promise-wrapped `transitionend` event handler to the node.

It resolves and removes itself when the next `transitionend` event is triggered.

```javascript
import { transitionEnd } from 'tail-end'

// cache the node
const node = document.getElementById('example')

// bind the animationend event
transitionEnd(node)
  .then(() => console.log('Transition done.'))
  .catch(error => console.log(`Invalid node: ${error}`))

// TODO: something to trigger the event
```

## Roadmap

- [ ] Event name detection (`animationend` and `transitionend` are prefixed in some browsers)

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea

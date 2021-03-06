# tail-end

[![tail-end on NPM](https://img.shields.io/npm/v/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![tail-end Downloads on NPM](https://img.shields.io/npm/dm/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Promise-wrapped CSS animations and transitions (`async`/`await` friendly).

## Install

```sh
$ npm i tail-end --save
```

## API

The following functions are exported:

* `animationEnd(node[, function])`
* `transitionEnd(node[, function])`

Both exports add a Promise-wrapped event handler to the node. The Promise removes the event listener and resolves itself when the event is triggered.

```javascript
import { animationEnd } from 'tail-end'

// bind the event, then trigger it
animationEnd(node)
  .then(() => console.log('Transition ended.'))
  .catch(error => console.log('Invalid node passed in: ', error))

node.classList.add('will-animate')
```

For usage with `async`/`await` you can pass in a `function` as the second parameter. The function will be called in an [animation frame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) after the event listener is bound, and passed the `node`.

```javascript
import { transitionEnd } from 'tail-end'

// define a sequence of animations/transitions with async/await
const sequence = async () => {
  await transitionEnd(node, node => node.style.transform = 'translate3d(100px, 0, 0)')
  await transitionEnd(node, node => node.style.transform = 'translate3d(0, 0, 0)')
  await transitionEnd(node, node => node.style.transform = 'translate3d(-100px, 0, 0)')
}

// run the sequence
sequence().then(() => console.log('Sequence completed.'))
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea

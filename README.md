# tail-end

[![tail-end on NPM](https://img.shields.io/npm/v/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![tail-end Downloads on NPM](https://img.shields.io/npm/dm/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Promise-wrapped animations and transitions (`async`/`await` friendly).

## Install

```sh
$ npm i tail-end --save
```

## API

The following functions are exported:

* `animationEnd`
* `transitionEnd`

### .function(node[, function])

Both exported functions add a Promise-wrapped event handler to the node. The Promise removes the event listener and resolves itself when the event is triggered.

```javascript
import { transitionEnd } from 'tail-end'

const node = document.querySelector('.example')

// bind the event
transitionEnd(node).then(_ => console.log('Transition ended.'))

// then trigger it
node.classList.add('will-transition')
```

For usage with `async`/`await`, you can pass a function that triggers the event in directly.

```javascript
import { animationEnd } from 'tail-end'

const node = document.querySelector('.example')

// define a sequence of animations/transition with async/await
const sequence = async _ => {
  await transitionEnd(node, node => node.style.transform = 'translate3d(100px, 0, 0)')
  await transitionEnd(node, node => node.style.transform = 'translate3d(0, 0, 0)')
  await transitionEnd(node, node => node.style.transform = 'translate3d(-100px, 0, 0)')
}

// run the sequence
sequence().then(_ => console.log('Sequence completed.'))
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea

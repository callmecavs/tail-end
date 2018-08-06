# tail-end

[![tail-end on NPM](https://img.shields.io/npm/v/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![tail-end Downloads on NPM](https://img.shields.io/npm/dm/tail-end.svg?style=flat-square)](https://www.npmjs.com/package/tail-end) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Promise-wrapped animations and transitions (`async`/`await` friendly).

## Install

```sh
$ npm i tail-end --save
```

## API

### .function(node[, function])

Both exported functions add a Promise-wrapped event handler to the node.

The Promise removes the event listener and resolves itself when the event is triggered.

```javascript
import {
  animationEnd,
  transitionEnd
} from 'tail-end'

const node = document.querySelector('.example')

// bind the event, then trigger it
transitionEnd(node).then(() => console.log('Transition ended.'))
node.classList.add('should-transition')

// or pass in a function that triggers the event
animationEnd(node, node => node.classList.add('should-animate'))

// usage with async/await
const sequence = async () => {
  await transitionEnd(node, node => node.style.transform = 'translate3d(100px, 0, 0)')
  await transitionEnd(node, node => node.style.transform = 'translate3d(0, 0, 0)')
  await transitionEnd(node, node => node.style.transform = 'translate3d(-100px, 0, 0)')
}

sequence().then(() => console.log('Sequence completed.'))
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea

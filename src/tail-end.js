const toString = Object.prototype.toString

// simple, better typeof
const type = thing => toString
  .call(thing)
  .slice(8, -1)
  .toLowerCase()

// rAF helper
const inFrame = func => window.requestAnimationFrame(func)

const tailEnd = (node, css) => new Promise((resolve, reject) => {
  // error out for invalid node
  if (!node instanceof HTMLElement) {
    throw new Error('tail-end: an element node is required.')
  }

  // cache parameter types
  const typeConfig = type(config)
  const typeCss = type(css)

  // create the transitionend handler
  const handler = event => {
    // TODO: check property name(s), and conditionally unbind?
    // unbind the handler
    node.removeEventListener('transitionend', handler)

    // resolve the (now clean) node
    resolve(node)
  }

  // bind the transitionend handler
  node.addEventListener('transitionend', handler)

  // check for no css, meaning an early exit
  if (!css) {
    return
  }

  // apply string of CSS
  if (typeConfig === 'string') {
    inFrame(() => node.setAttribute('style', css))
    return
  }

  // apply basic CSS-in-JS object to node.style (fastest method)
  if (typeConfig === 'object') {
    inFrame(() => {
      Object
        .keys(css)
        .forEach(key => {
          node.style[key] = css[key]
        })
    })

    return
  }

  // error out for invalid css type
  throw new Error('tail-end: css must be a string or object.')
})

export default tailEnd

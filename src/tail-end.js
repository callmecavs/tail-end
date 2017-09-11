const builder = eventName => node => new Promise((resolve, reject) => {
  // reject for invalid node
  if (!(node instanceof window.HTMLElement)) {
    return reject('tail-end: an element node is required.')
  }

  // create the event handler
  const handler = event => {
    // unbind the handler
    node.removeEventListener(eventName, handler)

    // resolve the (now clean) node
    return resolve(node)
  }

  // bind the handler
  node.addEventListener(eventName, handler)
})

const animationEnd = builder('animationend')
const transitionEnd = builder('transitionend')

export { animationEnd }
export { transitionEnd }

const builder = eventName => (node, func) => new Promise((resolve, reject) => {
  // reject for invalid node
  if (!(node instanceof window.HTMLElement)) {
    return reject(new Error('tail-end: an element node is required.'))
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

  // if it exists, call the function passing in the node
  if (typeof func === 'function') {
    func(node)
  }
})

export const animationEnd = builder('animationend')
export const transitionEnd = builder('transitionend')

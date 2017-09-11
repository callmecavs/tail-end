const tailEnd = (node, css) => new Promise((resolve, reject) => {
  // reject for invalid node
  if (!(node instanceof window.HTMLElement)) {
    return reject('tail-end: an element node is required.')
  }

  // create the transitionend handler
  const handler = event => {
    // TODO: check property name(s), and conditionally unbind?
    // unbind the handler
    node.removeEventListener('transitionend', handler)

    // resolve the (now clean) node
    return resolve(node)
  }

  // bind the transitionend handler
  node.addEventListener('transitionend', handler)

})

export default tailEnd

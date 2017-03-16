const toString = Object.prototype.toString

const type = thing => toString
  .call(thing)
  .slice(8, -1)

const tailEnd = (config, style) => new Promise((resolve, reject) => {
  // create the transitionend handler
  const handler = event => {
    // TODO: check the property name(s)
    // TODO: unbind the handler
    // TODO: resolve, do we want to pass anything on?
  }

  // TODO: bind the transitionend handler

  // check for no style, meaning an early exit
  if (!style) {
    return
  }

  // TODO: apply string of style, or apply object to element.style
})

export default tailEnd

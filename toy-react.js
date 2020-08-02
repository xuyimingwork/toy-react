export default {
  createElement(type, props, ...children) {
    console.log('createElement', type, props, children)

    const element = document.createElement(type)
    for (let name in props) {
      element.setAttribute(name, props[name])
    }
    for (let child of children) {
      if (typeof child === 'string') {
        child = document.createTextNode(child)
      }
      element.appendChild(child)
    }

    return element
  },

  render(element, container) {
    console.log('render', element, container)
    container.appendChild(element)
  }
}
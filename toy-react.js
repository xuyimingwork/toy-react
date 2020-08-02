class Component {
  constructor(props) {
    this.props = props
  }
}

export default {
  createElement(type, props, ...children) {
    console.log('createElement', type, props, children)

    let element = null

    if (typeof type === 'string') {
      element = document.createElement(type)

      for (let name in props) {
        if (name === 'className') {
          element.setAttribute('class', props[name])
          continue
        }

        element.setAttribute(name, props[name])
      }

      const appendChildren = children => {
        for (let child of children) {
          if (Array.isArray(child)) {
            appendChildren(child)
          } else {
            if (!(child instanceof Node)) child = child ? String(child) : ''
            if (typeof child === 'string') child = document.createTextNode(child)
            element.appendChild(child)
          }
        }
      }

      appendChildren(children)
    } else if (typeof type === 'function') {
      if (!props) props = Object.create(null)
      props.children = children

      element = type.prototype instanceof Component
        ? new type(props).render()
        : type(props)
    } else throw Error()

    return element
  },

  Component,

  render(element, container) {
    console.log('render', element, container)
    container.appendChild(element)
  }
}
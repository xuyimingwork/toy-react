import React from './toy-react'
import ReactDOM from './toy-react'

function Parent() {
  const children = [1, 2, 3]
  return <div>
    {children.map(i => <span>{i}</span>)}
  </div>
}

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
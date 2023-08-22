import React from 'react'
import ReactDom from 'react-dom'

const element = React.createElement('h1', {id: 'box', title: 'Hello React'}, 'Hello React!')
ReactDom.render(element, document.getElementById('root'))

import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checkbox from '../../src'

let Demo = React.createClass({
  render() {
    return(
    <MuiThemeProvider>
      <Checkbox label="I am a checkbox" />
    </MuiThemeProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))

import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checkbox from '../../src'

let Demo = React.createClass({
  onChange() {
    console.log("in OnChange")
    return (value) => {
      console.log(value)
    }
  },
  render() {
    return(
    <MuiThemeProvider>
      <Checkbox label="I am a checkbox" onCheck={this.onChange()} />
    </MuiThemeProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))

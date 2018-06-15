import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checkbox from '../../src'

let Demo = React.createClass({
  getInitialState () {
    return {
      checked: false
    };
  },
  onCheck() {
    return () => {
      this.setState((prevState, props) => ({
      checked: !this.state.checked
    }))
    }
  },
  render() {
    return(
    <MuiThemeProvider>
      <Checkbox label="I am a checkbox" checked={this.state.checked} onCheck={this.onCheck()} helpText="hello help text" />
    </MuiThemeProvider>
    )
  }
})

render(<Demo/>, document.querySelector('#demo'))

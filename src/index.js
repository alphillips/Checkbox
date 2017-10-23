import React from 'react'
import {Checkbox as Chckbox} from 'material-ui'

class Checkbox extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isInputChecked: props.isInputChecked || ''
      checked: props.checked || ''
    }
  }

  render() {

    const labelStyle = {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    }

    return (
      <Chckbox
        label={this.props.label || ''}
        checked={this.state.checked || false}
        disabled={this.props.disabled || false}
        inputStyle={this.props.inputStyle}
        labelPosition={this.props.labelPosition}
        labelStyle={this.labelStyle}
        onCheck={this.props.onCheck}
        style={this.props.style}
      />
    )
  }
}
export default Checkbox;

import React from 'react'
import {Checkbox as Chckbox} from 'material-ui'

class Checkbox extends React.Component {

  render() {

    const labelStyle = {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    }

    const style = {
      marginTop: '2em'
    }

    return (
      <Chckbox
        label={this.props.label || ''}
        disabled={this.props.disabled || false}
        labelPosition={this.props.labelPosition || 'right'}
        labelStyle={labelStyle}
        onCheck={this.props.onCheck}
        style={style}
      />
    )
  }
}
export default Checkbox;

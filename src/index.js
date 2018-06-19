import React from 'react'
import {Checkbox as Chckbox} from 'material-ui'
import Help from '@react-ag-components/help'

import './checkbox.css'

class Checkbox extends React.Component {

  render() {

    const labelStyle = {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    }

    const style = {
      marginTop: '2em'
    }

    let inputContainerStyle = {}
    let helpContainerStyle = {
      display:'none'
    }
    let className= ''

    if(this.props.helpText){
      className = 'input-with-help'
      inputContainerStyle = {
        width: '90%'
      }
      helpContainerStyle = {
        marginTop: '40px'
      }
    }

    return (
      <div className={"checkbox-container " + className}>
        <Chckbox
          label={this.props.label || ''}
          checked={this.props.checked}
          disabled={this.props.disabled || false}
          labelPosition={this.props.labelPosition || 'right'}
          labelStyle={labelStyle}
          onCheck={this.props.onCheck}
          style={style}
        />
        {this.props.helpText &&
          <Help
            text={this.props.helpText}
            style={helpContainerStyle}
          />
        }
      </div>
    )
  }
}
export default Checkbox;

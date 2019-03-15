function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Checkbox as Chckbox } from 'material-ui';
import Help from '@react-ag-components/help';

import './checkbox.css';

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Checkbox.prototype.render = function render() {

    var labelStyle = {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    };

    var style = {
      marginTop: '2em'
    };

    var inputContainerStyle = {};
    var helpContainerStyle = {
      display: 'none'
    };
    var className = '';

    if (this.props.helpText) {
      className = 'input-with-help';
      inputContainerStyle = {
        width: '90%'
      };
      helpContainerStyle = {
        marginTop: '40px'
      };
    }

    return React.createElement(
      'div',
      { className: "checkbox-container " + className },
      React.createElement(Chckbox, {
        label: this.props.label || '',
        checked: this.props.checked,
        disabled: this.props.disabled || false,
        labelPosition: this.props.labelPosition || 'right',
        labelStyle: labelStyle,
        onCheck: this.props.onCheck,
        style: style
      }),
      this.props.helpText && React.createElement(Help, {
        text: this.props.helpText,
        style: helpContainerStyle
      })
    );
  };

  return Checkbox;
}(React.Component);

export default Checkbox;
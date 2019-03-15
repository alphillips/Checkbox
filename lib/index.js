'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _help = require('@react-ag-components/help');

var _help2 = _interopRequireDefault(_help);

require('./checkbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    return _react2.default.createElement(
      'div',
      { className: "checkbox-container " + className },
      _react2.default.createElement(_materialUi.Checkbox, {
        label: this.props.label || '',
        checked: this.props.checked,
        disabled: this.props.disabled || false,
        labelPosition: this.props.labelPosition || 'right',
        labelStyle: labelStyle,
        onCheck: this.props.onCheck,
        style: style
      }),
      this.props.helpText && _react2.default.createElement(_help2.default, {
        text: this.props.helpText,
        style: helpContainerStyle
      })
    );
  };

  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;
module.exports = exports['default'];
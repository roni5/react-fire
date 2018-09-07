'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.list = exports.ulist = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _templateObject = _taggedTemplateLiteral(['\nlistStyle: none:\n\n'], ['\nlistStyle: none:\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nbackground: #EE82EE;\n  color: #C71585;\n\tmax-height: 100%;\n\tpadding: 15px auto;\n\tmargin: 0 auto;\n  margin-left: -41px ;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #C71585;\n  height: 40px;\n  .', ' {\n\n  }\n'], ['\nbackground: #EE82EE;\n  color: #C71585;\n\tmax-height: 100%;\n\tpadding: 15px auto;\n\tmargin: 0 auto;\n  margin-left: -41px ;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #C71585;\n  height: 40px;\n  .', ' {\n\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = require('react-emotion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ulist = exports.ulist = (0, _reactEmotion.css)(_templateObject);
var list = exports.list = (0, _reactEmotion.css)(_templateObject2, ulist);

var Footer = (_temp = _class = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.propTypes = {
      className: _propTypes2.default.string
    };


    _this.state = {
      year: new Date().getFullYear()
    };
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'ul',
          { className: ulist },
          _react2.default.createElement(
            'li',
            { className: list },
            '\xA9 ',
            this.state.year,
            ' Shopwiz.net'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component), _class.defaultProps = {
  className: null
}, _temp);
exports.default = Footer;

//# sourceMappingURL=Footer.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Links = exports.paragraph = exports.links = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  color: hotpink;\n"], ["\n  color: hotpink;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  color: gray;\n\n  .", " {\n    border-bottom: 1px solid color:#66cabf;\n  }\n"], ["\n  color: gray;\n\n  .", " {\n    border-bottom: 1px solid color:#66cabf;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require("react-emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//import { Link } from 'react-router-dom';


var links = exports.links = (0, _reactEmotion.css)(_templateObject);
var paragraph = exports.paragraph = (0, _reactEmotion.css)(_templateObject2, links);
var Links = exports.Links = _react2.default.createElement(
  Links,
  { page: "http://www.facebook.com" },
  "Facebook"
);

//# sourceMappingURL=Links.jsx.map
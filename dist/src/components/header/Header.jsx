'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Stateless Components
var Header = function Header() {
        return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                                _Nav2.default,
                                { href: '/' },
                                'Home'
                        ),
                        _react2.default.createElement(
                                _Nav2.default,
                                { href: '/profile' },
                                'Company'
                        ),
                        _react2.default.createElement(
                                _Nav2.default,
                                { href: '/profile/Roni' },
                                'Roni'
                        )
                )
        );
};

exports.default = Header;

//# sourceMappingURL=Header.jsx.map
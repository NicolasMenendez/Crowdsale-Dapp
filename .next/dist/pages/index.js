'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _TutorialToken = require('../ethereum/TutorialToken');

var _TutorialToken2 = _interopRequireDefault(_TutorialToken);

var _Crowdsale = require('../ethereum/Crowdsale');

var _Crowdsale2 = _interopRequireDefault(_Crowdsale);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _progressBar = require('../components/progressBar');

var _progressBar2 = _interopRequireDefault(_progressBar);

var _routes = require('../routes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nmmenendez/Documents/Dapps/tutorialToken/pages/index.js?entry';


var CrowdSaleApp = function (_Component) {
  (0, _inherits3.default)(CrowdSaleApp, _Component);

  function CrowdSaleApp() {
    (0, _classCallCheck3.default)(this, CrowdSaleApp);

    return (0, _possibleConstructorReturn3.default)(this, (CrowdSaleApp.__proto__ || (0, _getPrototypeOf2.default)(CrowdSaleApp)).apply(this, arguments));
  }

  (0, _createClass3.default)(CrowdSaleApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('h3', { className: 'ui header', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('h1', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Token Crowdsale'), _react2.default.createElement('h2', { className: 'ui center aligned blue header', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'ICO Live Now!'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, ' ', _react2.default.createElement(_progressBar2.default, { percentage: this.props.remainingTokens / this.props.totalSupply, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), ' '), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('h4', { className: 'ui right aligned header', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, ' Remaining tokens:', _web2.default.utils.fromWei(this.props.remainingTokens, 'ether'), '/', _web2.default.utils.fromWei(this.props.totalSupply, 'ether'), ' ')), _react2.default.createElement('h2', { className: 'ui center aligned header', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_routes.Link, { route: '/buytokens', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('button', { className: 'ui center aligned huge blue button', role: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Buy Tokens')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, tokenName, totalSupply, remainingTokens;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return _TutorialToken2.default.methods.name().call();

              case 5:
                tokenName = _context.sent;
                _context.next = 8;
                return _TutorialToken2.default.methods.totalSupply().call();

              case 8:
                totalSupply = _context.sent;
                _context.next = 11;
                return _TutorialToken2.default.methods.balanceOf(_Crowdsale2.default.options.address).call();

              case 11:
                remainingTokens = _context.sent;
                return _context.abrupt('return', { accounts: accounts, tokenName: tokenName, totalSupply: totalSupply, remainingTokens: remainingTokens });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CrowdSaleApp;
}(_react.Component);

exports.default = CrowdSaleApp;

//<div> {this.props.accounts[0]} </div>
//<div> {this.props.TokenName} </div>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiVHV0b3JpYWxUb2tlbiIsIkNyb3dkc2FsZSIsIndlYjMiLCJIZWFkZXIiLCJCdXR0b24iLCJQcm9ncmVzc0JhciIsIkxpbmsiLCJDcm93ZFNhbGVBcHAiLCJwcm9wcyIsInJlbWFpbmluZ1Rva2VucyIsInRvdGFsU3VwcGx5IiwidXRpbHMiLCJmcm9tV2VpIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJuYW1lIiwiY2FsbCIsInRva2VuTmFtZSIsImJhbGFuY2VPZiIsIm9wdGlvbnMiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVE7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFJYjs7Ozs7Ozs7Ozs7NkJBV08sQUFDTDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLCtDQUNNLFdBQUosQUFBYztvQkFBZDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FGRixBQUVFLEFBQ0Esb0NBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBSEYsQUFHRSxBQUNBLGtDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFNLHFCQUFBLEFBQUMsdUNBQVksWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFnQixLQUFBLEFBQUssTUFBekQsQUFBK0Q7b0JBQS9EO3NCQUFOLEFBQU07QUFBQTtVQUpSLEFBSUUsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FDQyxvQ0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixpQkFEL0IsQUFDQyxBQUE4QyxVQUM5QyxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixhQUYvQixBQUVDLEFBQTBDLFVBUjdDLEFBS0UsQUFDQSxBQUlBLHVCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQVEsV0FBUixBQUFrQixzQ0FBcUMsTUFBdkQsQUFBNEQ7b0JBQTVEO3NCQUFBO0FBQUE7U0FkVixBQUNFLEFBQ0UsQUFVRSxBQUNFLEFBQ0UsQUFPWDs7Ozs7Ozs7Ozs7O3VCQS9Cc0IsY0FBQSxBQUFLLElBQUwsQUFBUyxBOzttQkFBMUI7QTs7dUJBQ2tCLHdCQUFBLEFBQWMsUUFBZCxBQUFzQixPQUF0QixBLEFBQTZCOzttQkFBL0M7QTs7dUJBQ29CLHdCQUFBLEFBQWMsUUFBZCxBQUFzQixjQUF0QixBQUFvQyxBOzttQkFBeEQ7QTs7dUJBQ3dCLHdCQUFBLEFBQWMsUUFBZCxBQUFzQixVQUFVLG9CQUFBLEFBQVUsUUFBMUMsQUFBa0QsU0FBbEQsQUFBMkQsQTs7bUJBQW5GO0E7aURBRUMsRUFBRSxVQUFGLFVBQVksV0FBWixXQUF1QixhQUF2QixhQUFvQyxpQkFBcEMsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBjLEEsQUFvQzNCOztrQkFBQSxBQUFlOztBQUVmO0FBQ0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL25tbWVuZW5kZXovRG9jdW1lbnRzL0RhcHBzL3R1dG9yaWFsVG9rZW4ifQ==
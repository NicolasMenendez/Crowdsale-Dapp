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

var _jsxFileName = '/Users/nmmenendez/Documents/Dapps/crowdsale-dapp/pages/index.js?entry';


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
      }, _react2.default.createElement(_semanticUiReact.Segment, { clearing: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Remaining tokens:', _web2.default.utils.fromWei(this.props.remainingTokens, 'ether'), '/', _web2.default.utils.fromWei(this.props.totalSupply, 'ether')), _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', floated: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Ether amount raised so far:', _web2.default.utils.fromWei(this.props.amountRaisedSoFar, 'ether') + " eth"))), _react2.default.createElement('h2', { className: 'ui center aligned header', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_routes.Link, { route: '/buytokens', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('button', { className: 'ui center aligned huge blue button', role: 'button', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Buy Tokens')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, tokenName, totalSupply, remainingTokens, amountRaisedSoFar;
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
                _context.next = 14;
                return _Crowdsale2.default.methods.weiRaised().call();

              case 14:
                amountRaisedSoFar = _context.sent;
                return _context.abrupt('return', { accounts: accounts, tokenName: tokenName, totalSupply: totalSupply, remainingTokens: remainingTokens, amountRaisedSoFar: amountRaisedSoFar });

              case 16:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiVHV0b3JpYWxUb2tlbiIsIkNyb3dkc2FsZSIsIndlYjMiLCJIZWFkZXIiLCJCdXR0b24iLCJTZWdtZW50IiwiUHJvZ3Jlc3NCYXIiLCJMaW5rIiwiQ3Jvd2RTYWxlQXBwIiwicHJvcHMiLCJyZW1haW5pbmdUb2tlbnMiLCJ0b3RhbFN1cHBseSIsInV0aWxzIiwiZnJvbVdlaSIsImFtb3VudFJhaXNlZFNvRmFyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJuYW1lIiwiY2FsbCIsInRva2VuTmFtZSIsImJhbGFuY2VPZiIsIm9wdGlvbnMiLCJhZGRyZXNzIiwid2VpUmFpc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTzs7QUFDeEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFRLEFBQVc7Ozs7Ozs7SUFJYixBOzs7Ozs7Ozs7Ozs2QkFXTyxBQUNMOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsK0NBQ00sV0FBSixBQUFjO29CQUFkO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQSxvQ0FBQSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FIRixBQUdFLEFBQ0Esa0NBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU0scUJBQUEsQUFBQyx1Q0FBWSxZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQWdCLEtBQUEsQUFBSyxNQUF6RCxBQUErRDtvQkFBL0Q7c0JBQU4sQUFBTTtBQUFBO1VBSlIsQUFJRSxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsMENBQVEsVUFBVDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxTQUFoQixBQUF3QjtvQkFBeEI7c0JBQUE7QUFBQTtTQUVDLG1DQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLGlCQUYvQixBQUVDLEFBQThDLFVBQzlDLG1CQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLGFBSmpDLEFBQ0UsQUFHQyxBQUEwQyxBQUUzQywyQkFBQSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLFNBQWhCLEFBQXdCO29CQUF4QjtzQkFBQTtBQUFBO1NBRUMsNkNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsbUJBQTlCLEFBQWdELFdBZHZELEFBS0UsQUFDRSxBQU1FLEFBRTRELEFBSWhFLDJCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQVEsV0FBUixBQUFrQixzQ0FBcUMsTUFBdkQsQUFBNEQ7b0JBQTVEO3NCQUFBO0FBQUE7U0F0QlYsQUFDRSxBQUNFLEFBa0JFLEFBQ0UsQUFDRSxBQU9YOzs7Ozs7Ozs7Ozs7dUJBdkNzQixjQUFBLEFBQUssSUFBTCxBLEFBQVM7O21CQUExQjtBOzt1QkFDa0Isd0JBQUEsQUFBYyxRQUFkLEFBQXNCLE9BQXRCLEEsQUFBNkI7O21CQUEvQztBOzt1QkFDb0Isd0JBQUEsQUFBYyxRQUFkLEFBQXNCLGNBQXRCLEFBQW9DLEE7O21CQUF4RDtBOzt1QkFDd0Isd0JBQUEsQUFBYyxRQUFkLEFBQXNCLFVBQVUsb0JBQUEsQUFBVSxRQUExQyxBQUFrRCxTQUFsRCxBQUEyRCxBOzttQkFBbkY7QTs7dUJBQzBCLG9CQUFBLEFBQVUsUUFBVixBQUFrQixZQUFsQixBQUE4QixBOzttQkFBeEQ7QTtpREFDQyxFQUFFLFVBQUYsVUFBWSxXQUFaLFdBQXVCLGFBQXZCLGFBQW9DLGlCQUFwQyxpQkFBb0QsbUJBQXBELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQYyxBLEFBNEMzQjs7a0JBQUEsQUFBZTs7QUFFZjtBQUNBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ubW1lbmVuZGV6L0RvY3VtZW50cy9EYXBwcy9jcm93ZHNhbGUtZGFwcCJ9
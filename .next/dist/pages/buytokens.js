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

var _semanticUiReact = require('semantic-ui-react');

var _TutorialToken = require('../ethereum/TutorialToken');

var _TutorialToken2 = _interopRequireDefault(_TutorialToken);

var _Crowdsale = require('../ethereum/Crowdsale');

var _Crowdsale2 = _interopRequireDefault(_Crowdsale);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nmmenendez/Documents/Dapps/tutorialToken/pages/buytokens.js?entry';


var buytokens = function (_Component) {
  (0, _inherits3.default)(buytokens, _Component);

  function buytokens(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, buytokens);

    var _this = (0, _possibleConstructorReturn3.default)(this, (buytokens.__proto__ || (0, _getPrototypeOf2.default)(buytokens)).call(this, props));

    _this.onCheckBalance = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, chekingBalance;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ errorMessage: '' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _TutorialToken2.default.methods.balanceOf(_this.state.checkingAddress).call();

              case 8:
                chekingBalance = _context.sent;

                _this.setState({ balance: _web2.default.utils.fromWei(chekingBalance, 'ether') });

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                _context2.prev = 2;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _Crowdsale2.default.methods.buyTokens(accounts[0]).send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.amountToInvest, 'ether')
                });

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errorMessage: _context2.t0.message });

              case 13:
                _this.setState({ loading: false });
                _this.setState({ successfulMessage: 'Your purchase has been successful!' });
                _this.setState({ amountToInvest: '', estimationTokens: '' });

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 10]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.onInputChange = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(amount) {
        var rate, tokenAmount;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.setState({ amountToInvest: amount });
                _context3.prev = 1;
                _context3.next = 4;
                return _Crowdsale2.default.methods.rate().call();

              case 4:
                rate = _context3.sent;

                console.log(rate);
                tokenAmount = amount * rate;

                console.log(tokenAmount);
                _this.setState({ estimationTokens: tokenAmount });
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3['catch'](1);

                _this.setState({ errorMessage: _context3.t0.message });

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[1, 11]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.onAddressInput = function (address) {
      _this.setState({ checkingAddress: address });
    };

    _this.state = { amountToInvest: '',
      checkingAddress: '',
      balance: '',
      errorMessage: '',
      successfulMessage: '',
      estimationTokens: '',
      loading: false };
    return _this;
  }

  (0, _createClass3.default)(buytokens, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, ' Invest In Token ICO'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, success: !!this.state.successfulMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, ' Amount to Invest'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Amount',
        label: 'ether',
        labelPosition: 'right',
        value: this.state.amountToInvest,
        onChange: function onChange(event) {
          return _this3.onInputChange(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Token Estimation (Read Only)', readOnly: true, label: 'tokens',
        labelPosition: 'right',
        value: this.state.estimationTokens,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: this.state.successfulMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'Invest')), _react2.default.createElement('div', { className: 'ui divider', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, ' '), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, ' Check Balance of Address'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onCheckBalance, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, {
        width: 7,
        fluid: true,
        id: 'form-subcomponent-shorthand-address',
        label: 'Address',
        placeholder: 'Input Address',
        value: this.state.checkingAddress,
        onChange: function onChange(event) {
          return _this3.onAddressInput(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        width: 4,
        readOnly: true,
        fluid: true,
        id: 'form-subcomponent-shorthand-Balance',
        label: 'Balance',
        placeholder: 'Balance',
        value: this.state.balance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'Check Balance')));
    }
  }]);

  return buytokens;
}(_react.Component);

exports.default = buytokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2J1eXRva2Vucy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJUdXRvcmlhbFRva2VuIiwiQ3Jvd2RzYWxlIiwid2ViMyIsImJ1eXRva2VucyIsInByb3BzIiwib25DaGVja0JhbGFuY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsInN0YXRlIiwiY2hlY2tpbmdBZGRyZXNzIiwiY2FsbCIsImNoZWtpbmdCYWxhbmNlIiwiYmFsYW5jZSIsInV0aWxzIiwiZnJvbVdlaSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsImxvYWRpbmciLCJidXlUb2tlbnMiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwidG9XZWkiLCJhbW91bnRUb0ludmVzdCIsInN1Y2Nlc3NmdWxNZXNzYWdlIiwiZXN0aW1hdGlvblRva2VucyIsIm9uSW5wdXRDaGFuZ2UiLCJhbW91bnQiLCJyYXRlIiwiY29uc29sZSIsImxvZyIsInRva2VuQW1vdW50Iiwib25BZGRyZXNzSW5wdXQiLCJhZGRyZXNzIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBTyxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBR1gsQTtxQ0FDSjs7cUJBQUEsQUFBWSxPQUFPO2lCQUFBOzt3Q0FBQTs7NElBQUEsQUFDWDs7VUFEVyxBQVluQiw2QkFabUI7MEZBWUYsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNiO3NC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
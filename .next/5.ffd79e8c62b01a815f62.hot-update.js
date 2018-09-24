webpackHotUpdate(5,{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(778);

var _Layout2 = _interopRequireDefault(_Layout);

var _TutorialToken = __webpack_require__(1111);

var _TutorialToken2 = _interopRequireDefault(_TutorialToken);

var _Crowdsale = __webpack_require__(1273);

var _Crowdsale2 = _interopRequireDefault(_Crowdsale);

var _web = __webpack_require__(561);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(465);

var _progressBar = __webpack_require__(1275);

var _progressBar2 = _interopRequireDefault(_progressBar);

var _routes = __webpack_require__(721);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/nmmenendez/Documents/Dapps/crowdsale-dapp/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nmmenendez/Documents/Dapps/crowdsale-dapp/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mZmQ3OWU4YzYyYjAxYTgxNWY2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NWFiMmIwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgVHV0b3JpYWxUb2tlbiBmcm9tICcuLi9ldGhlcmV1bS9UdXRvcmlhbFRva2VuJztcbmltcG9ydCBDcm93ZHNhbGUgZnJvbSAnLi4vZXRoZXJldW0vQ3Jvd2RzYWxlJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgSGVhZGVyLCBCdXR0b24sU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMuanMnO1xuXG5cblxuY2xhc3MgQ3Jvd2RTYWxlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGNvbnN0IHRva2VuTmFtZSA9IGF3YWl0IFR1dG9yaWFsVG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuICAgICAgY29uc3QgdG90YWxTdXBwbHkgPSBhd2FpdCBUdXRvcmlhbFRva2VuLm1ldGhvZHMudG90YWxTdXBwbHkoKS5jYWxsKCk7XG4gICAgICBjb25zdCByZW1haW5pbmdUb2tlbnMgPSBhd2FpdCBUdXRvcmlhbFRva2VuLm1ldGhvZHMuYmFsYW5jZU9mKENyb3dkc2FsZS5vcHRpb25zLmFkZHJlc3MpLmNhbGwoKTtcbiAgICAgIGNvbnN0IGFtb3VudFJhaXNlZFNvRmFyID0gYXdhaXQgQ3Jvd2RzYWxlLm1ldGhvZHMud2VpUmFpc2VkKCkuY2FsbCgpO1xuICAgICAgcmV0dXJuIHsgYWNjb3VudHMsIHRva2VuTmFtZSwgdG90YWxTdXBwbHksIHJlbWFpbmluZ1Rva2VucyxhbW91bnRSYWlzZWRTb0ZhciB9O1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGNlbnRlciBhbGlnbmVkIGJsdWUgaGVhZGVyXCI+VG9rZW4gQ3Jvd2RzYWxlPC9oMT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVpIGNlbnRlciBhbGlnbmVkIGJsdWUgaGVhZGVyXCI+SUNPIExpdmUgTm93ITwvaDI+XG4gICAgICAgICAgICAgIDxkaXY+IDxQcm9ncmVzc0JhciBwZXJjZW50YWdlPXt0aGlzLnByb3BzLnJlbWFpbmluZ1Rva2Vucy90aGlzLnByb3BzLnRvdGFsU3VwcGx5fSAvPiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U2VnbWVudCBjbGVhcmluZz5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBmbG9hdGVkPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICBSZW1haW5pbmcgdG9rZW5zOlxuICAgICAgICAgICAgICAgICAge3dlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLnJlbWFpbmluZ1Rva2VucywnZXRoZXInKX0vXG4gICAgICAgICAgICAgICAgICB7d2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMudG90YWxTdXBwbHksJ2V0aGVyJyl9XG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBmbG9hdGVkPSdsZWZ0Jz5cbiAgICAgICAgICAgICAgICAgIEV0aGVyIGFtb3VudCByYWlzZWQgc28gZmFyOlxuICAgICAgICAgICAgICAgICAge3dlYjMudXRpbHMuZnJvbVdlaSh0aGlzLnByb3BzLmFtb3VudFJhaXNlZFNvRmFyLCdldGhlcicpICsgXCIgZXRoXCJ9XG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidWkgY2VudGVyIGFsaWduZWQgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvYnV5dG9rZW5zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGNlbnRlciBhbGlnbmVkIGh1Z2UgYmx1ZSBidXR0b25cIiByb2xlPVwiYnV0dG9uXCI+QnV5IFRva2VuczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3dkU2FsZUFwcDtcblxuLy88ZGl2PiB7dGhpcy5wcm9wcy5hY2NvdW50c1swXX0gPC9kaXY+XG4vLzxkaXY+IHt0aGlzLnByb3BzLlRva2VuTmFtZX0gPC9kaXY+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7O0FBdkNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
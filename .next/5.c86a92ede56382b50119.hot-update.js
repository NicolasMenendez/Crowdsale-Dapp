webpackHotUpdate(5,{

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = __webpack_require__(465);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nmmenendez/Documents/Dapps/tutorialToken/components/progressBar.js';


var progressBar = function (_Component) {
  (0, _inherits3.default)(progressBar, _Component);

  function progressBar(props) {
    (0, _classCallCheck3.default)(this, progressBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (progressBar.__proto__ || (0, _getPrototypeOf2.default)(progressBar)).call(this, props));

    var percentageValue = 100 - _this.props.percentage * 100;

    _this.state = { percent: percentageValue };
    return _this;
  }

  (0, _createClass3.default)(progressBar, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', { className: 'progress-bar', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_semanticUiReact.Progress, { percent: this.state.percent, indicating: true, progress: true,
        size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }]);

  return progressBar;
}(_react.Component);

exports.default = progressBar;

//        <Button onClick={this.increment}>Increment</Button>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9ncmVzcyIsIkJ1dHRvbiIsInByb2dyZXNzQmFyIiwicHJvcHMiLCJwZXJjZW50YWdlVmFsdWUiLCJwZXJjZW50YWdlIiwic3RhdGUiLCJwZXJjZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBVTs7Ozs7OztJLEFBRVo7dUNBQ0o7O3VCQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0pBQUEsQUFDWCxBQUVOOztRQUFNLGtCQUFrQixNQUFPLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBMUMsQUFBdUQsQUFFdkQ7O1VBQUEsQUFBSyxRQUFRLEVBQUMsU0FMRyxBQUtqQixBQUFhLEFBQVU7V0FDeEI7Ozs7OzZCQUdRLEFBRVA7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQywyQ0FBVSxTQUFTLEtBQUEsQUFBSyxNQUF6QixBQUErQixTQUFTLFlBQXhDLE1BQW1ELFVBQW5ELEFBQ0E7Y0FEQSxBQUNLO29CQURMO3NCQUZKLEFBQ0UsQUFDRSxBQUtMO0FBTEs7Ozs7OztBQWRrQixBLEFBc0IxQjs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJwcm9ncmVzc0Jhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm1tZW5lbmRlei9Eb2N1bWVudHMvRGFwcHMvdHV0b3JpYWxUb2tlbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/nmmenendez/Documents/Dapps/tutorialToken/components/progressBar.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nmmenendez/Documents/Dapps/tutorialToken/components/progressBar.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jODZhOTJlZGU1NjM4MmI1MDExOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9ncmVzc0Jhci5qcz8yZTA3ZmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Byb2dyZXNzLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgcHJvZ3Jlc3NCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHBlcmNlbnRhZ2VWYWx1ZSA9IDEwMCAtICh0aGlzLnByb3BzLnBlcmNlbnRhZ2UgKiAxMDApO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7cGVyY2VudDogcGVyY2VudGFnZVZhbHVlIH07XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiPlxuICAgICAgICA8UHJvZ3Jlc3MgIHBlcmNlbnQ9e3RoaXMuc3RhdGUucGVyY2VudH0gaW5kaWNhdGluZyBwcm9ncmVzc1xuICAgICAgICBzaXplPSdsYXJnZScgLz5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9ncmVzc0JhcjtcblxuLy8gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5pbmNyZW1lbnR9PkluY3JlbWVudDwvQnV0dG9uPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wcm9ncmVzc0Jhci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUxBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
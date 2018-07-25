'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nmmenendez/Documents/Dapps/crowdsale-dapp/components/progressBar.js';


var progressBar = function (_Component) {
  (0, _inherits3.default)(progressBar, _Component);

  function progressBar(props) {
    (0, _classCallCheck3.default)(this, progressBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (progressBar.__proto__ || (0, _getPrototypeOf2.default)(progressBar)).call(this, props));

    var percentageValue = (100 - _this.props.percentage * 100).toFixed(2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9ncmVzcyIsIkJ1dHRvbiIsInByb2dyZXNzQmFyIiwicHJvcHMiLCJwZXJjZW50YWdlVmFsdWUiLCJwZXJjZW50YWdlIiwidG9GaXhlZCIsInN0YXRlIiwicGVyY2VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFRLEFBQVU7Ozs7Ozs7SSxBQUVaO3VDQUNKOzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7O2dKQUFBLEFBQ1gsQUFFTjs7UUFBTSxrQkFBa0IsQ0FBQyxNQUFPLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBbkIsQUFBZ0MsS0FBaEMsQUFBc0MsUUFBOUQsQUFBd0IsQUFBOEMsQUFFdEU7O1VBQUEsQUFBSyxRQUFRLEVBQUMsU0FMRyxBQUtqQixBQUFhLEFBQVU7V0FDeEI7Ozs7OzZCQUdRLEFBRVA7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQywyQ0FBVSxTQUFTLEtBQUEsQUFBSyxNQUF6QixBQUErQixTQUFTLFlBQXhDLE1BQW1ELFVBQW5ELEFBQ0E7Y0FEQSxBQUNLO29CQURMO3NCQUZKLEFBQ0UsQUFDRSxBQUtMO0FBTEs7Ozs7OztBQWRrQixBLEFBc0IxQjs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJwcm9ncmVzc0Jhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm1tZW5lbmRlei9Eb2N1bWVudHMvRGFwcHMvY3Jvd2RzYWxlLWRhcHAifQ==
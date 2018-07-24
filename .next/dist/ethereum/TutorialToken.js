'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _TutorialToken = require('../build/contracts/TutorialToken.json');

var _TutorialToken2 = _interopRequireDefault(_TutorialToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(TutorialToken.abi);
var instance = new _web2.default.eth.Contract(_TutorialToken2.default.abi, '0xb958441b39891712cd272a6be0c1b068c22c07dc');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL1R1dG9yaWFsVG9rZW4uanMiXSwibmFtZXMiOlsid2ViMyIsIlR1dG9yaWFsVG9rZW4iLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBMEIsQUFBMUI7Ozs7OztBQUVBO0FBQ0EsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLHdCQUFjLEFBREQsS0FFYixBQUZhLEFBQWpCLEFBTUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoiVHV0b3JpYWxUb2tlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm1tZW5lbmRlei9Eb2N1bWVudHMvRGFwcHMvdHV0b3JpYWxUb2tlbiJ9
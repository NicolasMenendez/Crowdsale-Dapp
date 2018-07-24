'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Crowdsale = require('../build/contracts/Crowdsale.json');

var _Crowdsale2 = _interopRequireDefault(_Crowdsale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(TutorialToken.abi);
var instance = new _web2.default.eth.Contract(_Crowdsale2.default.abi, '0x955ded1810b2808dfcf85e11f68e8dfb01f18162');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL0Nyb3dkc2FsZS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ3Jvd2RzYWxlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCOzs7Ozs7QUFFQTtBQUNBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDYixvQkFBVSxBQURHLEtBRWIsQUFGYSxBQUFqQixBQU1BOztrQkFBZSxBQUFmIiwiZmlsZSI6IkNyb3dkc2FsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbm1tZW5lbmRlei9Eb2N1bWVudHMvRGFwcHMvdHV0b3JpYWxUb2tlbiJ9
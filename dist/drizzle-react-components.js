(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("drizzle-react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "drizzle-react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["drizzle-react-components"] = factory(require("react"), require("drizzle-react"), require("prop-types"));
	else
		root["drizzle-react-components"] = factory(root["react"], root["drizzle-react"], root["prop-types"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingContainer = exports.ContractForm = exports.ContractData = exports.AccountData = undefined;

var _AccountData = __webpack_require__(4);

var _AccountData2 = _interopRequireDefault(_AccountData);

var _ContractData = __webpack_require__(5);

var _ContractData2 = _interopRequireDefault(_ContractData);

var _ContractForm = __webpack_require__(6);

var _ContractForm2 = _interopRequireDefault(_ContractForm);

var _LoadingContainer = __webpack_require__(7);

var _LoadingContainer2 = _interopRequireDefault(_LoadingContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AccountData = _AccountData2.default;
exports.ContractData = _ContractData2.default;
exports.ContractForm = _ContractForm2.default;
exports.LoadingContainer = _LoadingContainer2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drizzleReact = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Create component.
 */

var AccountData = function (_Component) {
  _inherits(AccountData, _Component);

  function AccountData(props, context) {
    _classCallCheck(this, AccountData);

    var _this = _possibleConstructorReturn(this, (AccountData.__proto__ || Object.getPrototypeOf(AccountData)).call(this, props));

    _this.precisionRound = _this.precisionRound.bind(_this);
    return _this;
  }

  _createClass(AccountData, [{
    key: 'precisionRound',
    value: function precisionRound(number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }
  }, {
    key: 'render',
    value: function render() {
      // No accounts found.
      if (Object.keys(this.props.accounts).length === 0) {
        return _react2.default.createElement(
          'span',
          null,
          'Initializing...'
        );
      }

      // Get account address and balance.
      var address = this.props.accounts[this.props.accountIndex];
      var balance = this.props.accountBalances[address];
      var units = this.props.units ? this.props.units.charAt(0).toUpperCase() + this.props.units.slice(1) : 'Wei';

      // Convert to given units.
      if (this.props.units) {
        balance = this.context.drizzle.web3.utils.fromWei(balance, this.props.units);
      }

      // Adjust to given precision.
      if (this.props.precision) {
        balance = this.precisionRound(balance, this.props.precision);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          address
        ),
        _react2.default.createElement(
          'p',
          null,
          balance,
          ' ',
          units
        )
      );
    }
  }]);

  return AccountData;
}(_react.Component);

AccountData.contextTypes = {
  drizzle: _propTypes2.default.object

  /*
   * Export connected component.
   */

};var mapStateToProps = function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    accountBalances: state.accountBalances
  };
};

exports.default = (0, _drizzleReact.drizzleConnect)(AccountData, mapStateToProps);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractData = function (_Component) {
    _inherits(ContractData, _Component);

    function ContractData(props) {
        var _this$method;

        _classCallCheck(this, ContractData);

        // Fetch initial value from chain and return cache key for reactive updates.
        var _this = _possibleConstructorReturn(this, (ContractData.__proto__ || Object.getPrototypeOf(ContractData)).call(this, props));

        _this.method = _this.props.drizzle.contracts[_this.props.contract].methods[_this.props.method];
        var methodArgs = _this.props.methodArgs ? _this.props.methodArgs : [];
        _this.state = { dataKey: (_this$method = _this.method).cacheCall.apply(_this$method, _toConsumableArray(methodArgs)) };
        return _this;
    }

    _createClass(ContractData, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.methodArgs) {
                if (JSON.stringify(this.props.methodArgs) !== JSON.stringify(prevProps.methodArgs)) {
                    this.setState({
                        dataKey: this.method.cacheCall(this.props.methodArgs)
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                drizzle = _props.drizzle,
                drizzleState = _props.drizzleState;
            // Contract is not yet intialized.

            if (!drizzleState.contracts[this.props.contract].initialized) {
                return _react2.default.createElement(
                    'span',
                    null,
                    'Initializing...'
                );
            }

            // If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
            if (!(this.state.dataKey in drizzleState.contracts[this.props.contract][this.props.method])) {
                return null;
            }
            // Show a loading spinner for future updates.
            var pendingSpinner = drizzleState.contracts[this.props.contract].synced ? '' : ' 🔄';

            // Optionally hide loading spinner (EX: ERC20 token symbol).
            if (this.props.hideIndicator) {
                pendingSpinner = '';
            }
            var displayData = drizzleState.contracts[this.props.contract][this.props.method][this.state.dataKey].value;

            if (displayData instanceof Object) {
                displayData = Object.values(displayData);
            }
            if (this.props.displayFunc) {
                return this.props.displayFunc(displayData);
            }
            // Need to convert on an per-item basis for Objects/arrays.
            // Optionally convert to UTF8
            if (this.props.toUtf8) {
                displayData = drizzle.web3.utils.hexToUtf8(displayData);
            }

            // Optionally convert to Ascii
            if (this.props.toAscii) {
                displayData = drizzle.web3.utils.hexToAscii(displayData);
            }
            if (displayData instanceof Array) {
                var displayListItems = displayData.map(function (datum, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i },
                        datum,
                        pendingSpinner
                    );
                });
                return _react2.default.createElement(
                    'ul',
                    null,
                    displayListItems
                );
            }

            return _react2.default.createElement(
                'span',
                null,
                displayData,
                pendingSpinner
            );
        }
    }]);

    return ContractData;
}(_react.Component);

exports.default = ContractData;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drizzleReact = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Create component.
 */

var ContractForm = function (_Component) {
  _inherits(ContractForm, _Component);

  function ContractForm(props, context) {
    _classCallCheck(this, ContractForm);

    var _this = _possibleConstructorReturn(this, (ContractForm.__proto__ || Object.getPrototypeOf(ContractForm)).call(this, props));

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.contracts = context.drizzle.contracts;

    // Get the contract ABI
    var abi = _this.contracts[_this.props.contract].abi;

    _this.inputs = [];
    var initialState = {};

    // Iterate over abi for correct function.
    for (var i = 0; i < abi.length; i++) {
      if (abi[i].name === _this.props.method) {
        _this.inputs = abi[i].inputs;

        for (var i = 0; i < _this.inputs.length; i++) {
          initialState[_this.inputs[i].name] = '';
        }

        break;
      }
    }

    _this.state = initialState;
    return _this;
  }

  _createClass(ContractForm, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _contracts$props$cont2;

      if (this.props.sendArgs) {
        var _contracts$props$cont;

        return (_contracts$props$cont = this.contracts[this.props.contract].methods[this.props.method]).cacheSend.apply(_contracts$props$cont, _toConsumableArray(Object.values(this.state)).concat([this.props.sendArgs]));
      }

      (_contracts$props$cont2 = this.contracts[this.props.contract].methods[this.props.method]).cacheSend.apply(_contracts$props$cont2, _toConsumableArray(Object.values(this.state)));
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'translateType',
    value: function translateType(type) {
      switch (true) {
        case /^uint/.test(type):
          return 'number';
          break;
        case /^string/.test(type) || /^bytes/.test(type):
          return 'text';
          break;
        case /^bool/.test(type):
          return 'checkbox';
          break;
        default:
          return 'text';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { className: 'pure-form pure-form-stacked' },
        this.inputs.map(function (input, index) {
          var inputType = _this2.translateType(input.type);
          var inputLabel = _this2.props.labels ? _this2.props.labels[index] : input.name;
          // check if input type is struct and if so loop out struct fields as well
          return _react2.default.createElement('input', { key: input.name, type: inputType, name: input.name, value: _this2.state[input.name], placeholder: inputLabel, onChange: _this2.handleInputChange });
        }),
        _react2.default.createElement(
          'button',
          { key: 'submit', className: 'pure-button', type: 'button', onClick: this.handleSubmit },
          'Submit'
        )
      );
    }
  }]);

  return ContractForm;
}(_react.Component);

ContractForm.contextTypes = {
  drizzle: _propTypes2.default.object

  /*
   * Export connected component.
   */

};var mapStateToProps = function mapStateToProps(state) {
  return {
    contracts: state.contracts
  };
};

exports.default = (0, _drizzleReact.drizzleConnect)(ContractForm, mapStateToProps);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drizzleReact = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Create component.
 */

var LoadingContainer = function (_Component) {
  _inherits(LoadingContainer, _Component);

  function LoadingContainer() {
    _classCallCheck(this, LoadingContainer);

    return _possibleConstructorReturn(this, (LoadingContainer.__proto__ || Object.getPrototypeOf(LoadingContainer)).apply(this, arguments));
  }

  _createClass(LoadingContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.web3.status === 'failed') {
        if (this.props.errorComp) {
          return this.props.errorComp;
        }

        return _react2.default.createElement(
          'main',
          { className: 'container loading-screen' },
          _react2.default.createElement(
            'div',
            { className: 'pure-g' },
            _react2.default.createElement(
              'div',
              { className: 'pure-u-1-1' },
              _react2.default.createElement(
                'h1',
                null,
                '\u26A0\uFE0F'
              ),
              _react2.default.createElement(
                'p',
                null,
                'This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.'
              )
            )
          )
        );
      }

      if (this.props.web3.status === 'initialized' && Object.keys(this.props.accounts).length === 0) {
        return _react2.default.createElement(
          'main',
          { className: 'container loading-screen' },
          _react2.default.createElement(
            'div',
            { className: 'pure-g' },
            _react2.default.createElement(
              'div',
              { className: 'pure-u-1-1' },
              _react2.default.createElement(
                'h1',
                null,
                '\uD83E\uDD8A'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'We can\'t find any Ethereum accounts!'
                ),
                ' Please check and make sure Metamask or your browser are pointed at the correct network and your account is unlocked.'
              )
            )
          )
        );
      }

      if (this.props.drizzleStatus.initialized) {
        return _react.Children.only(this.props.children);
      }

      if (this.props.loadingComp) {
        return this.props.loadingComp;
      }

      return _react2.default.createElement(
        'main',
        { className: 'container loading-screen' },
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1-1' },
            _react2.default.createElement(
              'h1',
              null,
              '\u2699\uFE0F'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Loading dapp...'
            )
          )
        )
      );
    }
  }]);

  return LoadingContainer;
}(_react.Component);

LoadingContainer.contextTypes = {
  drizzle: _propTypes2.default.object

  /*
   * Export connected component.
   */

};var mapStateToProps = function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    web3: state.web3
  };
};

exports.default = (0, _drizzleReact.drizzleConnect)(LoadingContainer, mapStateToProps);

/***/ })
/******/ ]);
});
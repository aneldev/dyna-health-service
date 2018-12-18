(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-health-service", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-health-service"] = factory();
	else
		root["dyna-health-service"] = factory();
})(global, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/node.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dyna/universalImport.ts":
/*!*********************************!*\
  !*** ./dyna/universalImport.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.importUniversal = function (moduleName) {
  var universalImports = typeof process !== "undefined" && process.universalImports || typeof window !== "undefined" && window.universalImports;

  if (!universalImports) {
    console.error("importUniversal error: no exports found, use exportUniversalNode/exportUniversalWeb to export universal modules");
  }

  var runningEnvironment = process && process.universalImports ? "node" : "web";

  if (!universalImports[moduleName]) {
    console.error("importUniversal error: module [" + moduleName + "] not found, seems that is not exported for running Environment [" + runningEnvironment + "]");
  }

  return universalImports[moduleName];
};

exports.exportNode = function (modules) {
  process.universalImports = __assign({}, process.universalImports || {}, modules);
};

exports.exportWeb = function (modules) {
  window.universalImports = __assign({}, window.universalImports || {}, modules);
};

/***/ }),

/***/ "./src/DynaHealthService.ts":
/*!**********************************!*\
  !*** ./src/DynaHealthService.ts ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var universalImport_1 = __webpack_require__(/*! ../dyna/universalImport */ "./dyna/universalImport.ts");

var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./src/interfaces.ts");

var DynaHealthService =
/** @class */
function () {
  function DynaHealthService(config) {
    var _a;

    var _this = this;

    this.config = config;
    this.listeners = [];
    this.service = new (universalImport_1.importUniversal("DynaNodeService"))(__assign({}, this.config, {
      onCommand: (_a = {}, _a[interfaces_1.COMMAND_addHealthStats] = {
        execute: function (_a) {
          var message = _a.message,
              next = _a.next;

          _this.pushNotification(message.data);

          next();
        }
      }, _a[interfaces_1.COMMAND_registerNotificationHealthStats] = {
        execute: function (_a) {
          var message = _a.message,
              next = _a.next;

          _this.registerListener({
            address: message.from,
            replyOfId: message.id
          });

          next();
        }
      }, _a[interfaces_1.COMMAND_unregisterNotificationHealthStats] = {
        execute: function (_a) {
          var message = _a.message,
              next = _a.next;

          _this.unregisterListener({
            address: message.from,
            replyOfId: message.id
          });

          next();
        }
      }, _a),
      onReplySendFail: function (message, error, retry, skip, stop) {
        console.error(_this.service.friendlyName + "/onReplySendFail", 'Cannot send this reply, message will be skipped (will be lost)', {
          message: message,
          error: error
        });
        skip();
      },
      onServiceRegistrationFail: function (error) {
        console.error(_this.service.friendlyName + "/onServiceRegistrationFail", 'Service registration failed', {
          error: error
        });
      },
      onMessageQueueError: function (error) {
        console.error(_this.service.friendlyName + "/onMessageQueueError", 'Message Queue error (disk error?)', {
          error: error
        });
      }
    }));
  }

  DynaHealthService.prototype.start = function () {
    var _this = this;

    return this.service.start().then(function () {
      console.log("DynaTravelHealthService " + _this.service.friendlyName + " started");
    }).catch(function (error) {
      console.error("DynaTravelHealthService " + _this.service.friendlyName + " cannot start", error);
    });
  };

  Object.defineProperty(DynaHealthService.prototype, "active", {
    get: function () {
      return this.service.active;
    },
    enumerable: true,
    configurable: true
  });

  DynaHealthService.prototype.stop = function () {
    return this.service.stop();
  };

  DynaHealthService.prototype.registerListener = function (listener) {
    this.listeners.push(listener);
  };

  DynaHealthService.prototype.unregisterListener = function (listener) {
    this.listeners = this.listeners.filter(function (scanListener) {
      return scanListener.replyOfId !== listener.replyOfId;
    });
  };

  DynaHealthService.prototype.pushNotification = function (stats) {
    var _this = this;

    this.listeners.forEach(function (listener) {
      _this.service.sendReceive({
        to: listener.address,
        replyOfId: listener.replyOfId,
        command: interfaces_1.COMMAND_healthStatsUpdate,
        data: {
          stats: stats
        },
        replyTimeoutInMs: 5000
      }).catch(function (error) {
        if (error.code === 404.101 || error.code === 1810211741) {
          _this.unregisterListener(listener);
        } else {
          console.warn("DynaTravelHealthService cannot sent to listener", {
            listener: listener,
            error: error
          });
        }
      });
    });
  };

  return DynaHealthService;
}();

exports.DynaHealthService = DynaHealthService;

/***/ }),

/***/ "./src/interfaces.ts":
/*!***************************!*\
  !*** ./src/interfaces.ts ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* Add health stats.
* This is used for commands, to update the services with some stats of it.
* Send the COMMAND_addHealthStats with ICOMMAND_addHealthStats_data and that's all.
* */

exports.COMMAND_addHealthStats = "COMMAND_addHealthStats";
/*
* Monitor the stats
* Register your self, simply send a message with command COMMAND_registerNotificationHealthStats
* without args or data. You will start receiving multiple replies with command COMMAND_healthStatsUpdate
* and ICOMMAND_healthStatsUpdate_data as data.
*
* You have to reply on each receive a blank email to let the service know that you are alive.
* Simply call `dynaNodeClient.reply(message)` where message is the incomming message with the stats.
* If you don't reply withing 5secs the service will unregister you. You have to resend the
* COMMAND_registerNotificationHealthStats command.
*
* Sending this command, apply a timeout with replyTimeoutInMs, for instance 10000.
* If in 10secs you don't a response from the service then the connection is lost.
* You have to resend the command and start from the beginning.
* Resuming the data flow from the last received point is not currently supported.
* */

exports.COMMAND_registerNotificationHealthStats = "COMMAND_registerNotificationHealthStats";
exports.COMMAND_healthStatsUpdate = "COMMAND_healthStatsUpdate"; // note: you should reply a blank message as acknowledge

exports.COMMAND_unregisterNotificationHealthStats = "COMMAND_unregisterNotificationHealthStats";

/***/ }),

/***/ "./src/node.ts":
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var universalImport_1 = __webpack_require__(/*! ../dyna/universalImport */ "./dyna/universalImport.ts");

var node_1 = __webpack_require__(/*! dyna-node/node */ "dyna-node/node");

universalImport_1.exportNode({
  DynaNodeService: node_1.DynaNodeService
});

__export(__webpack_require__(/*! ./interfaces */ "./src/interfaces.ts"));

__export(__webpack_require__(/*! ./DynaHealthService */ "./src/DynaHealthService.ts"));

/***/ }),

/***/ "dyna-node/node":
/*!*********************************!*\
  !*** external "dyna-node/node" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("dyna-node/node");

/***/ })

/******/ });
});
//# sourceMappingURL=node.js.map
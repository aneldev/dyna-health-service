(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-health-service", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-health-service"] = factory();
	else
		root["dyna-health-service"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web.ts");
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
/* WEBPACK VAR INJECTION */(function(process) {

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
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

/***/ "./src/web.ts":
/*!********************!*\
  !*** ./src/web.ts ***!
  \********************/
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

var web_1 = __webpack_require__(/*! dyna-node/web */ "dyna-node/web");

__export(__webpack_require__(/*! ./interfaces */ "./src/interfaces.ts"));

universalImport_1.exportWeb({
  DynaNodeService: web_1.DynaNodeService
});

__export(__webpack_require__(/*! ./interfaces */ "./src/interfaces.ts"));

__export(__webpack_require__(/*! ./DynaHealthService */ "./src/DynaHealthService.ts"));

/***/ }),

/***/ "dyna-node/web":
/*!********************************!*\
  !*** external "dyna-node/web" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("dyna-node/web");

/***/ })

/******/ });
});
//# sourceMappingURL=web.js.map
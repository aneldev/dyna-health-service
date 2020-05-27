var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { DynaNodeService, } from "dyna-node/dist/commonJs/node";
import { COMMAND_addHealthStats, COMMAND_registerNotificationHealthStats, COMMAND_healthStatsUpdate, COMMAND_unregisterNotificationHealthStats, } from "./interfaces";
var DynaHealthService = /** @class */ (function () {
    function DynaHealthService(config) {
        var _a;
        var _this = this;
        this.config = config;
        this.listeners = [];
        this.service = new DynaNodeService(__assign(__assign({}, this.config), { publicCommands: [
                COMMAND_addHealthStats,
                COMMAND_registerNotificationHealthStats,
                COMMAND_unregisterNotificationHealthStats,
            ], onCommand: (_a = {},
                _a[COMMAND_addHealthStats] = {
                    execute: function (_a) {
                        var message = _a.message, next = _a.next;
                        _this.pushNotification(message.data);
                        next();
                    },
                },
                _a[COMMAND_registerNotificationHealthStats] = {
                    execute: function (_a) {
                        var message = _a.message, next = _a.next;
                        _this.registerListener({
                            address: message.from,
                            replyOfId: message.id,
                        });
                        next();
                    },
                },
                _a[COMMAND_unregisterNotificationHealthStats] = {
                    execute: function (_a) {
                        var message = _a.message, next = _a.next;
                        _this.unregisterListener({
                            address: message.from,
                            replyOfId: message.id,
                        });
                        next();
                    },
                },
                _a), onServiceRegistrationFail: function (error) {
                console.error(_this.service.friendlyName + "/onServiceRegistrationFail", 'Service registration failed', { error: error });
            }, onMessageQueueError: function (error) {
                console.error(_this.service.friendlyName + "/onMessageQueueError", 'Message Queue error (disk error?)', { error: error });
            } }));
    }
    DynaHealthService.prototype.start = function () {
        var _this = this;
        return this.service.start()
            .then(function () {
            console.log("DynaTravelHealthService " + _this.service.friendlyName + " started");
        })
            .catch(function (error) {
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
        this.listeners = this.listeners.filter(function (scanListener) { return scanListener.replyOfId !== listener.replyOfId; });
    };
    DynaHealthService.prototype.pushNotification = function (stats) {
        var _this = this;
        this.listeners.forEach(function (listener) {
            _this.service.sendReceive({
                to: listener.address,
                replyOfId: listener.replyOfId,
                command: COMMAND_healthStatsUpdate,
                data: { stats: stats },
                replyTimeoutInMs: 5000,
            })
                .catch(function (error) {
                if (error.code === 404.101 || error.code === 1810211741) {
                    _this.unregisterListener(listener);
                }
                else {
                    console.warn("DynaTravelHealthService cannot sent to listener", {
                        listener: listener,
                        error: error,
                    });
                }
            });
        });
    };
    return DynaHealthService;
}());
export { DynaHealthService };
//# sourceMappingURL=DynaHealthService.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetryOperation {
    constructor(timeouts, options) {
        var _a;
        this._originalTimeouts = [...timeouts];
        this._timeouts = timeouts;
        this._maxRetryTime = (_a = options === null || options === void 0 ? void 0 : options.maxRetryTime) !== null && _a !== void 0 ? _a : Infinity;
        this._fn = null;
        this._errors = [];
        this._attempts = 1;
        this._operationStart = null;
        this._timer = null;
    }
    reset() {
        this._attempts = 1;
        this._timeouts = this._originalTimeouts;
    }
    stop() {
        if (this._timer) {
            clearTimeout(this._timer);
        }
        this._timeouts = [];
    }
    ;
    retry(err) {
        if (!err) {
            return false;
        }
        var currentTime = new Date().getTime();
        if (err && currentTime - this._operationStart >= this._maxRetryTime) {
            this._errors.unshift(new Error('RetryOperation timeout occurred'));
            return false;
        }
        this._errors.push(err);
        var timeout = this._timeouts.shift();
        if (timeout === undefined) {
            return false;
        }
        this._timer = setTimeout(() => this._fn(++this._attempts), timeout);
        return timeout;
    }
    ;
    attempt(fn) {
        this._fn = fn;
        this._operationStart = new Date().getTime();
        this._fn(this._attempts);
    }
    ;
    errors() {
        return this._errors;
    }
    ;
    attempts() {
        return this._attempts;
    }
    ;
    mainError() {
        if (this._errors.length === 0) {
            return null;
        }
        var counts = {};
        var mainError = null;
        var mainErrorCount = 0;
        for (var i = 0; i < this._errors.length; i++) {
            var error = this._errors[i];
            var message = error.message;
            var count = (counts[message] || 0) + 1;
            counts[message] = count;
            if (count >= mainErrorCount) {
                mainError = error;
                mainErrorCount = count;
            }
        }
        return mainError;
    }
}
exports.default = RetryOperation;
//# sourceMappingURL=retry_operation.js.map
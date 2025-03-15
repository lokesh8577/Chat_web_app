"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTimeout = exports.createTimeouts = exports.operation = void 0;
const retry_operation_1 = require("./retry_operation");
function operation(options) {
    var timeouts = createTimeouts(options);
    return new retry_operation_1.default(timeouts, {
        maxRetryTime: options && options.maxRetryTime
    });
}
exports.operation = operation;
;
function createTimeouts(options) {
    var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1 * 1000,
        maxTimeout: Infinity,
        randomize: false,
        ...options,
    };
    if (opts.minTimeout > opts.maxTimeout) {
        throw new Error('minTimeout is greater than maxTimeout');
    }
    var timeouts = [];
    for (var i = 0; i < opts.retries; i++) {
        timeouts.push(createTimeout(i, opts));
    }
    // sort the array numerically ascending
    timeouts.sort(function (a, b) {
        return a - b;
    });
    return timeouts;
}
exports.createTimeouts = createTimeouts;
;
function createTimeout(attempt, opts) {
    var random = (opts.randomize)
        ? (Math.random() + 1)
        : 1;
    var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
    timeout = Math.min(timeout, opts.maxTimeout);
    return timeout;
}
exports.createTimeout = createTimeout;
;
//# sourceMappingURL=retry.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockfileBreakingChangeError = void 0;
const error_1 = require("@pnpm/error");
class LockfileBreakingChangeError extends error_1.PnpmError {
    constructor(filename) {
        super('LOCKFILE_BREAKING_CHANGE', `Lockfile ${filename} not compatible with current pnpm`);
        this.filename = filename;
    }
}
exports.LockfileBreakingChangeError = LockfileBreakingChangeError;
//# sourceMappingURL=LockfileBreakingChangeError.js.map
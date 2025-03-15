"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanGitBranchLockfiles = exports.getLockfileImporterId = exports.existsNonEmptyWantedLockfile = exports.writeWantedLockfile = exports.writeCurrentLockfile = exports.writeLockfiles = exports.isEmptyLockfile = void 0;
var write_1 = require("./write");
Object.defineProperty(exports, "isEmptyLockfile", { enumerable: true, get: function () { return write_1.isEmptyLockfile; } });
Object.defineProperty(exports, "writeLockfiles", { enumerable: true, get: function () { return write_1.writeLockfiles; } });
Object.defineProperty(exports, "writeCurrentLockfile", { enumerable: true, get: function () { return write_1.writeCurrentLockfile; } });
Object.defineProperty(exports, "writeWantedLockfile", { enumerable: true, get: function () { return write_1.writeWantedLockfile; } });
var existsWantedLockfile_1 = require("./existsWantedLockfile");
Object.defineProperty(exports, "existsNonEmptyWantedLockfile", { enumerable: true, get: function () { return existsWantedLockfile_1.existsNonEmptyWantedLockfile; } });
var getLockfileImporterId_1 = require("./getLockfileImporterId");
Object.defineProperty(exports, "getLockfileImporterId", { enumerable: true, get: function () { return getLockfileImporterId_1.getLockfileImporterId; } });
__exportStar(require("@pnpm/lockfile-types"), exports);
__exportStar(require("./read"), exports);
var gitBranchLockfile_1 = require("./gitBranchLockfile");
Object.defineProperty(exports, "cleanGitBranchLockfiles", { enumerable: true, get: function () { return gitBranchLockfile_1.cleanGitBranchLockfiles; } });
//# sourceMappingURL=index.js.map
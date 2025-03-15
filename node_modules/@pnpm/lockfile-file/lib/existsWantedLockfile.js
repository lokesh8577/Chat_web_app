"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsNonEmptyWantedLockfile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lockfileName_1 = require("./lockfileName");
async function existsNonEmptyWantedLockfile(pkgPath, opts = {
    useGitBranchLockfile: false,
    mergeGitBranchLockfiles: false,
}) {
    const wantedLockfile = await (0, lockfileName_1.getWantedLockfileName)(opts);
    return new Promise((resolve, reject) => {
        fs_1.default.access(path_1.default.join(pkgPath, wantedLockfile), (err) => {
            if (err == null) {
                resolve(true);
                return;
            }
            if (err.code === 'ENOENT') {
                resolve(false);
                return;
            }
            reject(err);
        });
    });
}
exports.existsNonEmptyWantedLockfile = existsNonEmptyWantedLockfile;
//# sourceMappingURL=existsWantedLockfile.js.map
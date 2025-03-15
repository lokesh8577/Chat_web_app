"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanGitBranchLockfiles = exports.getGitBranchLockfileNames = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
async function getGitBranchLockfileNames(lockfileDir) {
    const files = await fs_1.promises.readdir(lockfileDir);
    const gitBranchLockfileNames = files.filter(file => file.match(/^pnpm-lock.(?:.*).yaml$/));
    return gitBranchLockfileNames;
}
exports.getGitBranchLockfileNames = getGitBranchLockfileNames;
async function cleanGitBranchLockfiles(lockfileDir) {
    const gitBranchLockfiles = await getGitBranchLockfileNames(lockfileDir);
    await Promise.all(gitBranchLockfiles.map(async (file) => {
        const filepath = path_1.default.join(lockfileDir, file);
        await fs_1.promises.unlink(filepath);
    }));
}
exports.cleanGitBranchLockfiles = cleanGitBranchLockfiles;
//# sourceMappingURL=gitBranchLockfile.js.map
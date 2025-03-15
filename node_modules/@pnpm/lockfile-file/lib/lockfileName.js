"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWantedLockfileName = void 0;
const constants_1 = require("@pnpm/constants");
const git_utils_1 = require("@pnpm/git-utils");
async function getWantedLockfileName(opts = { useGitBranchLockfile: false, mergeGitBranchLockfiles: false }) {
    if (opts.useGitBranchLockfile && !opts.mergeGitBranchLockfiles) {
        const currentBranchName = await (0, git_utils_1.getCurrentBranch)();
        if (currentBranchName) {
            return constants_1.WANTED_LOCKFILE.replace('.yaml', `.${stringifyBranchName(currentBranchName)}.yaml`);
        }
    }
    return constants_1.WANTED_LOCKFILE;
}
exports.getWantedLockfileName = getWantedLockfileName;
/**
 * 1. Git branch name may contains slashes, which is not allowed in filenames
 * 2. Filesystem may be case-insensitive, so we need to convert branch name to lowercase
 */
function stringifyBranchName(branchName = '') {
    return branchName.replace(/[^a-zA-Z0-9-_.]/g, '!').toLowerCase();
}
//# sourceMappingURL=lockfileName.js.map
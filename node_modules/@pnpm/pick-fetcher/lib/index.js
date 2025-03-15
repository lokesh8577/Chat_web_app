"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGitHostedPkgUrl = exports.pickFetcher = void 0;
function pickFetcher(fetcherByHostingType, resolution) {
    let fetcherType = resolution.type;
    if (resolution.type == null) {
        if (resolution.tarball.startsWith('file:')) {
            fetcherType = 'localTarball';
        }
        else if (isGitHostedPkgUrl(resolution.tarball)) {
            fetcherType = 'gitHostedTarball';
        }
        else {
            fetcherType = 'remoteTarball';
        }
    }
    const fetch = fetcherByHostingType[fetcherType];
    if (!fetch) {
        throw new Error(`Fetching for dependency type "${resolution.type ?? 'undefined'}" is not supported`);
    }
    return fetch;
}
exports.pickFetcher = pickFetcher;
function isGitHostedPkgUrl(url) {
    return (url.startsWith('https://codeload.github.com/') ||
        url.startsWith('https://bitbucket.org/') ||
        url.startsWith('https://gitlab.com/')) && url.includes('tar.gz');
}
exports.isGitHostedPkgUrl = isGitHostedPkgUrl;
//# sourceMappingURL=index.js.map
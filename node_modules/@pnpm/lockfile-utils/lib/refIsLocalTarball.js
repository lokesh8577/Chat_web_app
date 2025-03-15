"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refIsLocalDirectory = exports.refIsLocalTarball = void 0;
function refIsLocalTarball(ref) {
    return ref.startsWith('file:') && (ref.endsWith('.tgz') || ref.endsWith('.tar.gz') || ref.endsWith('.tar'));
}
exports.refIsLocalTarball = refIsLocalTarball;
function refIsLocalDirectory(ref) {
    return ref.startsWith('file:') && !refIsLocalTarball(ref);
}
exports.refIsLocalDirectory = refIsLocalDirectory;
//# sourceMappingURL=refIsLocalTarball.js.map
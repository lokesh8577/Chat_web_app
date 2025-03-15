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
exports.getPkgShortId = exports.refIsLocalDirectory = exports.refIsLocalTarball = exports.satisfiesPackageManifest = exports.pkgSnapshotToResolution = exports.packageIsIndependent = exports.packageIdFromSnapshot = exports.nameVerFromPkgSnapshot = exports.extendProjectsWithTargetDirs = void 0;
const dependency_path_1 = require("@pnpm/dependency-path");
var extendProjectsWithTargetDirs_1 = require("./extendProjectsWithTargetDirs");
Object.defineProperty(exports, "extendProjectsWithTargetDirs", { enumerable: true, get: function () { return extendProjectsWithTargetDirs_1.extendProjectsWithTargetDirs; } });
var nameVerFromPkgSnapshot_1 = require("./nameVerFromPkgSnapshot");
Object.defineProperty(exports, "nameVerFromPkgSnapshot", { enumerable: true, get: function () { return nameVerFromPkgSnapshot_1.nameVerFromPkgSnapshot; } });
var packageIdFromSnapshot_1 = require("./packageIdFromSnapshot");
Object.defineProperty(exports, "packageIdFromSnapshot", { enumerable: true, get: function () { return packageIdFromSnapshot_1.packageIdFromSnapshot; } });
var packageIsIndependent_1 = require("./packageIsIndependent");
Object.defineProperty(exports, "packageIsIndependent", { enumerable: true, get: function () { return packageIsIndependent_1.packageIsIndependent; } });
var pkgSnapshotToResolution_1 = require("./pkgSnapshotToResolution");
Object.defineProperty(exports, "pkgSnapshotToResolution", { enumerable: true, get: function () { return pkgSnapshotToResolution_1.pkgSnapshotToResolution; } });
var satisfiesPackageManifest_1 = require("./satisfiesPackageManifest");
Object.defineProperty(exports, "satisfiesPackageManifest", { enumerable: true, get: function () { return satisfiesPackageManifest_1.satisfiesPackageManifest; } });
var refIsLocalTarball_1 = require("./refIsLocalTarball");
Object.defineProperty(exports, "refIsLocalTarball", { enumerable: true, get: function () { return refIsLocalTarball_1.refIsLocalTarball; } });
Object.defineProperty(exports, "refIsLocalDirectory", { enumerable: true, get: function () { return refIsLocalTarball_1.refIsLocalDirectory; } });
__exportStar(require("@pnpm/lockfile-types"), exports);
// for backward compatibility
exports.getPkgShortId = dependency_path_1.refToRelative;
//# sourceMappingURL=index.js.map
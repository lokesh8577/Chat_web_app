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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkgSnapshotToResolution = void 0;
const url_1 = __importDefault(require("url"));
const dp = __importStar(require("@pnpm/dependency-path"));
const get_npm_tarball_url_1 = __importDefault(require("get-npm-tarball-url"));
const pick_fetcher_1 = require("@pnpm/pick-fetcher");
const nameVerFromPkgSnapshot_1 = require("./nameVerFromPkgSnapshot");
function pkgSnapshotToResolution(depPath, pkgSnapshot, registries) {
    if (Boolean(pkgSnapshot.resolution.type) ||
        pkgSnapshot.resolution.tarball?.startsWith('file:') ||
        (0, pick_fetcher_1.isGitHostedPkgUrl)(pkgSnapshot.resolution.tarball ?? '')) {
        return pkgSnapshot.resolution;
    }
    const { name } = (0, nameVerFromPkgSnapshot_1.nameVerFromPkgSnapshot)(depPath, pkgSnapshot);
    let registry = '';
    if (name != null) {
        if (name.startsWith('@')) {
            registry = registries[name.split('/')[0]];
        }
    }
    if (!registry) {
        registry = registries.default;
    }
    let tarball;
    if (!pkgSnapshot.resolution.tarball) {
        tarball = getTarball(registry);
    }
    else {
        tarball = new url_1.default.URL(pkgSnapshot.resolution.tarball, registry.endsWith('/') ? registry : `${registry}/`).toString();
    }
    return {
        ...pkgSnapshot.resolution,
        tarball,
    };
    function getTarball(registry) {
        const { name, version } = dp.parse(depPath);
        if (!name || !version) {
            throw new Error(`Couldn't get tarball URL from dependency path ${depPath}`);
        }
        return (0, get_npm_tarball_url_1.default)(name, version, { registry });
    }
}
exports.pkgSnapshotToResolution = pkgSnapshotToResolution;
//# sourceMappingURL=pkgSnapshotToResolution.js.map
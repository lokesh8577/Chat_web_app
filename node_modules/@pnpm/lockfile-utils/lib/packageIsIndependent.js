"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageIsIndependent = void 0;
function packageIsIndependent({ dependencies, optionalDependencies }) {
    return dependencies === undefined && optionalDependencies === undefined;
}
exports.packageIsIndependent = packageIsIndependent;
//# sourceMappingURL=packageIsIndependent.js.map
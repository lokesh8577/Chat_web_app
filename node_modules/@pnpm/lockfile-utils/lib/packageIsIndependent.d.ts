import { type PackageSnapshot } from '@pnpm/lockfile-types';
export declare function packageIsIndependent({ dependencies, optionalDependencies }: PackageSnapshot): boolean;

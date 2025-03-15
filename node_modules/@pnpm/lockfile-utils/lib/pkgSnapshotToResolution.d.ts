import { type PackageSnapshot } from '@pnpm/lockfile-types';
import { type Resolution } from '@pnpm/resolver-base';
import { type Registries } from '@pnpm/types';
export declare function pkgSnapshotToResolution(depPath: string, pkgSnapshot: PackageSnapshot, registries: Registries): Resolution;

import { type ProjectSnapshot } from '@pnpm/lockfile-types';
import { type ProjectManifest } from '@pnpm/types';
export declare function satisfiesPackageManifest(opts: {
    autoInstallPeers?: boolean;
    excludeLinksFromLockfile?: boolean;
}, importer: ProjectSnapshot | undefined, pkg: ProjectManifest): {
    satisfies: boolean;
    detailedReason?: string;
};

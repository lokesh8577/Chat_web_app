export interface GetWantedLockfileNameOptions {
    useGitBranchLockfile?: boolean;
    mergeGitBranchLockfiles?: boolean;
}
export declare function getWantedLockfileName(opts?: GetWantedLockfileNameOptions): Promise<string>;

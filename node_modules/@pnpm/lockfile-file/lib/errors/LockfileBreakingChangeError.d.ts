import { PnpmError } from '@pnpm/error';
export declare class LockfileBreakingChangeError extends PnpmError {
    filename: string;
    constructor(filename: string);
}

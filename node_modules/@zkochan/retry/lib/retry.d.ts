import RetryOperation from './retry_operation';
export declare function operation(options: RetryTimeoutOptions & {
    maxRetryTime?: number;
}): RetryOperation;
export declare type RetryTimeoutOptions = {
    factor?: number;
    maxTimeout?: number;
    minTimeout?: number;
    randomize?: boolean;
    retries?: number;
};
export declare function createTimeouts(options: RetryTimeoutOptions): number[];
export declare function createTimeout(attempt: number, opts: Required<Pick<RetryTimeoutOptions, 'randomize' | 'factor' | 'minTimeout' | 'maxTimeout'>>): number;

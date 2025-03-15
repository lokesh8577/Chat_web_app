export default class RetryOperation {
    private _originalTimeouts;
    private _timeouts;
    private _attempts;
    private _timer;
    private _errors;
    private _maxRetryTime;
    private _operationStart;
    private _fn;
    constructor(timeouts: number[], options?: {
        maxRetryTime?: number;
    });
    reset(): void;
    stop(): void;
    retry(err: Error): number | false;
    attempt(fn: (attempt: number) => void): void;
    errors(): Error[];
    attempts(): number;
    mainError(): Error | null;
}

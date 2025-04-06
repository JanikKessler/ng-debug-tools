import {effect, EffectRef} from '@angular/core';
import {isLogLevel, LogLevel, LogLevelEnum} from './log-level';


export function logEffect(logLevel: LogLevel, ...args: unknown[]): EffectRef;
export function logEffect(...args: unknown[]): EffectRef;
export function logEffect(levelOrArg: LogLevel | unknown, ...rest: unknown[]): EffectRef {
    if (isLogLevel(levelOrArg)) {
        return createLogEffect(levelOrArg, ...rest);
    } else {
        const params = levelOrArg !== undefined && levelOrArg !== null ? [levelOrArg, ...rest] : rest;
        return createLogEffect(null, ...params);
    }
}


const createLogEffect = (logLevel: LogLevel | null, ...args: unknown[]) => {
    return effect(() => {
        const evaluatedArgs = args.map(arg =>
            typeof arg === 'function' ? arg() : arg
        );

        switch (logLevel) {
            case LogLevelEnum.LOG:
                console.log(...evaluatedArgs);
                break;
            case LogLevelEnum.INFO:
                console.info(...evaluatedArgs);
                break;
            case LogLevelEnum.DEBUG:
                console.debug(...evaluatedArgs);
                break;
            case LogLevelEnum.ERROR:
                console.error(...evaluatedArgs);
                break;
            case LogLevelEnum.WARN:
                console.warn(...evaluatedArgs);
                break;
            default:
                console.log(...evaluatedArgs);
        }
    })
}

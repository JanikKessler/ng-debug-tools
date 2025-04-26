export enum LogLevelEnum {
  LOG = 'log',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  DEBUG = 'debug'
}
export type LogLevel = LogLevelEnum;

export const isLogLevel = (value: unknown): value is LogLevel => {
  return typeof value === 'string' &&
    Object.values(LogLevelEnum).includes(value as LogLevelEnum);
};

import SpyInstance = jest.SpyInstance;

export type LogLevelOptions = null | 'log' | 'info' | 'debug' |'error' |'warn'

export const logLevelTestParams: LogLevelOptions[] = [
    null,
    'log',
    'info',
    'debug',
    'error',
    'warn'
]

export function setUpConsoleSpy(logLevel: LogLevelOptions): SpyInstance{
    let consoleSpy: SpyInstance;
    if(logLevel === null) {
        consoleSpy = jest.spyOn(console,'log')
    } else {
        consoleSpy = jest.spyOn(console, logLevel)
    }
    return consoleSpy
}

export function getComponentSignalLogValue(compName: string,signalOneVal: number, signalTwoVal: number){
    return '%cLogging Signals for Component: ' + compName
        + ':%c\ntestSignal: '
        + signalOneVal
        + '\ntestSignal2: '
        + signalTwoVal
}

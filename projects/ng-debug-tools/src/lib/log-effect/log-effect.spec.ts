import {InjectionToken} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LogEffectMockComponent} from '../mock/log-effect.mock.component';
import {LogLevelEnum} from './log-level';

let fixture: ComponentFixture<LogEffectMockComponent>;
let componentInstance: LogEffectMockComponent;
let consoleNullSpy: jest.SpyInstance
let consoleLogSpy: jest.SpyInstance
let consoleInfoSpy: jest.SpyInstance
let consoleWarnSpy: jest.SpyInstance
let consoleErrorSpy: jest.SpyInstance
let consoleDebugSpy: jest.SpyInstance

describe('Console method tests', () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    const testCases: [string | null, number, number, number, number, number, number][] = [
        [null, 2, 2, 0, 0, 0, 0],
        ['log', 3, 3, 0, 0, 0, 0],
        ['info', 0, 0, 3, 0, 0, 0],
        ['debug', 0, 0, 0, 3, 0, 0],
        ['error', 0, 0, 0, 0, 3, 0],
        ['warn', 0, 0, 0, 0, 0, 3],
    ]

    it.each<[string | null, number, number, number, number, number, number]>(testCases)('%s logs with %d logs , %d info log,  %d debug logs, %d error logs, %d warn logs', (
        logLevel,
        nullCalls,
        logCalls,
        infoCalls,
        debugCalls,
        errorCalls,
        warnCalls) => {

        setup(logLevel)

        componentInstance.changeTestSignal(10)
        fixture.detectChanges()

        componentInstance.changeTestSignal(20)
        fixture.detectChanges()

        expect(consoleNullSpy).toHaveBeenCalledTimes(nullCalls)
        expect(consoleLogSpy).toHaveBeenCalledTimes(logCalls)
        expect(consoleInfoSpy).toHaveBeenCalledTimes(infoCalls)
        expect(consoleDebugSpy).toHaveBeenCalledTimes(debugCalls)
        expect(consoleWarnSpy).toHaveBeenCalledTimes(warnCalls)
        expect(consoleErrorSpy).toHaveBeenCalledTimes(errorCalls)
    });
});

function setup(logLevel: string | null) {
    fixture = TestBed.configureTestingModule({
        imports: [LogEffectMockComponent],
        providers: [
            {provide: LogLevelToken, useValue: logLevel}
        ]
    }).createComponent(LogEffectMockComponent);
    fixture.detectChanges()
    componentInstance = fixture.componentInstance
    consoleNullSpy = jest.spyOn(global.console, 'log')
    consoleLogSpy = jest.spyOn(global.console, 'log')
    consoleInfoSpy = jest.spyOn(global.console, 'info')
    consoleWarnSpy = jest.spyOn(global.console, 'warn')
    consoleErrorSpy = jest.spyOn(global.console, 'error')
    consoleDebugSpy = jest.spyOn(global.console, 'debug')
}

export const LogLevelToken = new InjectionToken<LogLevelEnum>('Current Log Level')

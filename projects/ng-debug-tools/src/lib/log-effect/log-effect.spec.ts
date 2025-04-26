import {InjectionToken} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LogEffectMockComponent} from '../mock/log-effect.mock.component';
import {LogLevelEnum} from './log-level';
import {LogLevelOptions, logLevelTestParams, setUpConsoleSpy} from '../utils/test-utils';


let fixture: ComponentFixture<LogEffectMockComponent>;
let componentInstance: LogEffectMockComponent;
let consoleSpy: jest.SpyInstance


describe('Console method tests', () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it.each<LogLevelOptions>(logLevelTestParams)('%s logs with %d logs , %d info log,  %d debug logs, %d error logs, %d warn logs',
        (logLevel) => {
        setup(logLevel)

        componentInstance.changeTestSignal(10)
        fixture.detectChanges()

        componentInstance.changeTestSignal(20)
        fixture.detectChanges()

        expect(consoleSpy).toHaveBeenCalledTimes(3)
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 5);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 10);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 20);
    });
});

function setup(logLevel: LogLevelOptions) {
    fixture = TestBed.configureTestingModule({
        imports: [LogEffectMockComponent],
        providers: [
            {provide: LogLevelToken, useValue: logLevel}
        ]
    }).createComponent(LogEffectMockComponent);

    consoleSpy = setUpConsoleSpy(logLevel)
    componentInstance = fixture.componentInstance
    fixture.detectChanges()
}

export const LogLevelToken = new InjectionToken<LogLevelEnum>('Current Log Level')

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {LogLevelEnum} from '../log-effect/log-level';
import {ComponentSignalLogMockComponent} from '../mock/component-signal-log.mock.component';
import {
    ComponentSignalLogWrongParamTypeMockComponent
} from '../mock/component-signal-log-wrong-param-type.mock.component';
import {LogLevelOptions, logLevelTestParams, setUpConsoleSpy} from '../utils/test-utils';

let fixture: ComponentFixture<ComponentSignalLogMockComponent>;
let componentInstance: ComponentSignalLogMockComponent;
let consoleSpy: jest.SpyInstance


describe('Console method tests', () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it.each(logLevelTestParams)('%s logs with %d logs , %d info log,  %d debug logs, %d error logs, %d warn logs', (logLevel) => {
        setup(logLevel)

        componentInstance.changeTestSignal(10)
        fixture.detectChanges()

        componentInstance.changeTestSignal(20)
        fixture.detectChanges()

        componentInstance.testSignal2.set(20)
        fixture.detectChanges()

    });

    it('should throw error - input no component', () => {
        const initComponent = () => TestBed.createComponent(ComponentSignalLogWrongParamTypeMockComponent);
        expect(initComponent).toThrowError('Provided context is not a angular component');
    });
});

function setup(logLevel: LogLevelOptions) {
    TestBed.configureTestingModule({
        imports: [
            ComponentSignalLogMockComponent,
            ComponentSignalLogWrongParamTypeMockComponent
        ],
        providers: [
            {provide: LogLevelToken, useValue: logLevel}
        ]
    }).compileComponents();
    fixture = TestBed.createComponent(ComponentSignalLogMockComponent);
    consoleSpy = setUpConsoleSpy(logLevel)
    fixture.detectChanges()
    componentInstance = fixture.componentInstance

}

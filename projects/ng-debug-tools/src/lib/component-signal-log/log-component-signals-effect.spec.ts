import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {LogLevelEnum} from '../log-effect/log-level';
import {ComponentSignalLogMockComponent} from '../mock/component-signal-log.mock.component';
import {
    ComponentSignalLogWrongParamTypeMockComponent
} from '../mock/component-signal-log-wrong-param-type.mock.component';
import {Type} from '@angular/core';
import {logComponentSignals} from './log-component-signals-effect';

let fixture: ComponentFixture<ComponentSignalLogMockComponent>;
let componentInstance: ComponentSignalLogMockComponent;


describe('Console method tests', () => {

    beforeEach(() => {
        setup()
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('%s logs with %d logs , %d info log,  %d debug logs, %d error logs, %d warn logs', () => {
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

function setup(logLevel: string | null = LogLevelEnum.LOG) {
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
    fixture.detectChanges()
    componentInstance = fixture.componentInstance

}

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {LogLevelEnum} from '../log-effect/log-level';
import {ComponentSignalLogMockComponent} from '../mock/component-signal-log.mock.component';

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
});

function setup(logLevel: string | null = LogLevelEnum.LOG) {
    fixture = TestBed.configureTestingModule({
        imports: [ComponentSignalLogMockComponent],
        providers: [
            {provide: LogLevelToken, useValue: logLevel}
        ]
    }).createComponent(ComponentSignalLogMockComponent);
    fixture.detectChanges()
    componentInstance = fixture.componentInstance

}

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MockComponent} from '../mock/mock.component';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {LogLevelEnum} from '../log-effect/log-level';

let fixture: ComponentFixture<MockComponent>;
let componentInstance: MockComponent;


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
        imports: [MockComponent],
        providers: [
            {provide: LogLevelToken, useValue: logLevel}
        ]
    }).createComponent(MockComponent);
    fixture.detectChanges()
    componentInstance = fixture.componentInstance

}

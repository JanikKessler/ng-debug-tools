import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ComponentSignalLogMockComponent} from '../mock/component-signal-log.mock.component';
import {
    ComponentSignalLogWrongParamTypeMockComponent
} from '../mock/component-signal-log-wrong-param-type.mock.component';
import {getComponentSignalLogValue, setUpConsoleSpy} from '../utils/test-utils';
import {LogLevelEnum} from '../log-effect/log-level';

let fixture: ComponentFixture<ComponentSignalLogMockComponent>;
let componentInstance: ComponentSignalLogMockComponent;
let consoleSpy: jest.SpyInstance


describe('Console method tests', () => {

    beforeEach(() => {
        setup()
    })
    afterEach(() => {
        jest.resetAllMocks()
    })

    it(`should call console.log four times`, () => {
        componentInstance.changeTestSignal(10)
        fixture.detectChanges()

        componentInstance.changeTestSignal(20)
        fixture.detectChanges()

        componentInstance.testSignal2.set(20)
        fixture.detectChanges()

        expect(consoleSpy).toHaveBeenCalledTimes(4)
        expect(consoleSpy.mock.calls[0][0]).toBe(getComponentSignalLogValue('ComponentSignalLogMockComponent', 5, 5));
        expect(consoleSpy.mock.calls[1][0]).toBe(getComponentSignalLogValue('ComponentSignalLogMockComponent', 10, 5));
        expect(consoleSpy.mock.calls[2][0]).toBe(getComponentSignalLogValue('ComponentSignalLogMockComponent', 20, 5));
        expect(consoleSpy.mock.calls[3][0]).toBe(getComponentSignalLogValue('ComponentSignalLogMockComponent', 20, 20));
    });

    it('should throw error - input no component', () => {
        const initComponent = () => TestBed.createComponent(ComponentSignalLogWrongParamTypeMockComponent);
        expect(initComponent).toThrowError('Provided context is not a angular component');
    });
});

function setup() {
    fixture = TestBed.configureTestingModule({
        imports: [
            ComponentSignalLogMockComponent,
            ComponentSignalLogWrongParamTypeMockComponent
        ],
    }).createComponent(ComponentSignalLogMockComponent);
    consoleSpy = setUpConsoleSpy(LogLevelEnum.LOG)
    componentInstance = fixture.componentInstance
    fixture.detectChanges()
}

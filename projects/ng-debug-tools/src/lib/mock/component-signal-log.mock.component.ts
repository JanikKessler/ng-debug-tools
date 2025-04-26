import {Component, signal} from '@angular/core';
import {logComponentSignals} from '../component-signal-log/log-component-signals-effect';

@Component({
    selector: 'test-mock',
    template: `
    <div>
        mock works!
    </div>
    `,
})
export class ComponentSignalLogMockComponent {
    testSignal = signal<number>(5)
    testSignal2 = signal<number>(5)

    effect = logComponentSignals(this)

    changeTestSignal(newVal: number) {
        this.testSignal.set(newVal);
    }
}

import {Component, inject, signal} from '@angular/core';
import {LogLevelToken} from '../log-effect/log-effect.spec';
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
    logLevel = inject(LogLevelToken)
    testSignal = signal<number>(5)
    testSignal2 = signal<number>(5)

    effect = logComponentSignals(this)

    changeTestSignal(newVal: number) {
        this.testSignal.set(newVal);
    }
}

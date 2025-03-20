import {Component, inject, signal} from '@angular/core';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {logEffect} from '../log-effect/log-effect';

@Component({
    selector: 'test-mock',
    template: `
    <div>
        mock works!
    </div>
    `,
    styleUrl: './mock.component.css'
})
export class LogEffectMockComponent {
    logLevel = inject(LogLevelToken)
    testSignal = signal<number>(5)
    testSignal2 = signal<number>(5)

    effect = logEffect(this.logLevel, this.testSignal)

    changeTestSignal(newVal: number) {
        this.testSignal.set(newVal);
    }
}

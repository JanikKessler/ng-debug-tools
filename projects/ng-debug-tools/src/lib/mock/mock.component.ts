import {Component, inject, signal} from '@angular/core';
import {logEffect} from '../log-effect/log-effect';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {logComponentSignals} from '../component-signal-log/log-component-signals-effect';

@Component({
    selector: 'test-mock',
    templateUrl: './mock.component.html',
    styleUrl: './mock.component.css'
})
export class MockComponent {
    logLevel = inject(LogLevelToken)
    testSignal = signal<number>(5)
    testSignal2 = signal<number>(5)

    // effect = logEffect(this.logLevel, this.testSignal)
    effectComponent = logComponentSignals(this)

    changeTestSignal(newVal: number) {
        this.testSignal.set(newVal);
    }
}

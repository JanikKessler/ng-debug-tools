import {Component, input, model, signal, WritableSignal} from '@angular/core';
import {logEffect} from '../../../../ng-debug-tools/src/lib/log-effect/log-effect';
import {LogLevelEnum} from '../../../../ng-debug-tools/src/lib/log-effect/log-level';
import {logComponentSignals} from '../../../../ng-debug-tools/src/lib/component-signal-log/log-component-signals-effect';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-log-component-signals',
  templateUrl: './log-component-signals.component.html',
})
export class LogComponentSignalsComponent {
    inputSignal = input<number>(5);
    modelSignal = model<number>(5);
    testSignalOne = signal<number>(10);
    testSignalTwo = signal<number>(10);
    testEffectLog = logComponentSignals(this);


    setRandomTestSignalValue(signal: WritableSignal<number>) {
        signal.set(Math.random());
    }
}

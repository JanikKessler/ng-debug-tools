import {Component, signal} from '@angular/core';
import {debugLogEffect, logEffect} from '../../../../ng-debug-tools/src/lib/log-effect/log-effect';
import {LogLevelEnum} from '../../../../ng-debug-tools/src/lib/log-effect/log-level';

@Component({
    selector: 'app-log-effect',

    template: `
        <div>
            This is a test app for the ng-debug-tools lib. Current Test Signal Value: {{ testSignal() }}
        </div>
        <div>
            <button (click)="setRandomTestSignalValue()">Set Test Signal</button>
        </div>
    `,
})
export class LogEffectComponent {
    testSignal = signal<number>(10);
    testEffectNoPrefix = logEffect(this.testSignal);
    testEffectLog = logEffect('test-effect-log', this.testSignal);
    testEffectWarn = logEffect(LogLevelEnum.WARN, 'test-effect-warn', this.testSignal);
    testEffectInfo = logEffect(LogLevelEnum.INFO, 'test-effect-info', this.testSignal);
    testEffectDebug = logEffect(LogLevelEnum.DEBUG, 'test-effect-debug', this.testSignal);
    testEffectError = logEffect(LogLevelEnum.ERROR, 'test-effect-error', this.testSignal);

    testDebugLogEffect = debugLogEffect('debug-log-effect function',this.testSignal)


    setRandomTestSignalValue() {
        this.testSignal.set(Math.random());
    }
}

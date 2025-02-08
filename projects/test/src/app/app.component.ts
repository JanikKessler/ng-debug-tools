import {Component, input, signal} from '@angular/core';
import {logEffect} from '../../../ng-debug-tools/src/lib/log-effect/log-effect';
import {LogLevelEnum} from '../../../ng-debug-tools/src/lib/log-effect/log-level';
import {logComponentSignals} from '../../../ng-debug-tools/src/lib/component-signal-log/log-component-signals-effect';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <button [routerLink]="['logEffect']">Log Effect</button>
        </div>
        <div>
            <button [routerLink]="['logComponentSignals']">Log Component Signals</button>
        </div>

        ---------------------------

        <router-outlet></router-outlet>
    `,
    imports: [
        RouterLink,
        RouterOutlet
    ]
})
export class AppComponent {
  testSignal = signal<number>(10);
  testEffectLog = logEffect('test-effect-log', this.testSignal);
  testEffectWarn = logEffect(LogLevelEnum.WARN, 'test-effect-warn', this.testSignal);
  testEffectInfo = logEffect(LogLevelEnum.INFO, 'test-effect-info', this.testSignal);
  testEffectDebug = logEffect(LogLevelEnum.DEBUG, 'test-effect-debug', this.testSignal);
  testEffectError = logEffect(LogLevelEnum.ERROR, 'test-effect-error', this.testSignal);


  setRandomTestSignalValue() {
    this.testSignal.set(Math.random());
  }
}

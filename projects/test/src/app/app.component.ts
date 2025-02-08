import {Component, input, signal} from '@angular/core';
import {logEffect} from '../../../ng-debug-tools/src/lib/log-effect/log-effect';
import {LogLevelEnum} from '../../../ng-debug-tools/src/lib/log-effect/log-level';
import {logComponentSignals} from '../../../ng-debug-tools/src/lib/component-signal-log/log-component-signals-effect';

@Component({
  selector: 'app-root',
  template: `
    <div>
      This is a test app for the ng-debug-tools lib. Current Test Signal Value: {{testSignal()}}
    </div>
    <div>
      <button (click)="setRandomTestSignalValue()">Set Test Signal</button>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
    inputSignal = input<number>(5);
  testSignal = signal<number>(10);
  zwetesSignal = signal<number>(10);
  componentLogger = logComponentSignals(this);
  // testEffectLog = logEffect('test-effect-log', this.testSignal);
  // testEffectWarn = logEffect(LogLevelEnum.WARN, 'test-effect-warn', this.testSignal);
  // testEffectInfo = logEffect(LogLevelEnum.INFO, 'test-effect-info', this.testSignal);
  // testEffectDebug = logEffect(LogLevelEnum.DEBUG, 'test-effect-debug', this.testSignal);
  // testEffectError = logEffect(LogLevelEnum.ERROR, 'test-effect-error', this.testSignal);


  setRandomTestSignalValue() {
    this.testSignal.set(Math.random());
  }
}

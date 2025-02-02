import {Component, inject, signal} from '@angular/core';
import {logEffect} from '../log-effect/log-effect';
import {LogLevelToken} from '../log-effect/log-effect.spec';
import {LogLevelEnum} from '../log-effect/log-level';

@Component({
  selector: 'lib-mock',
  imports: [],
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.css'
})
export class MockComponent {
  logLevel = inject(LogLevelToken)
  testSignal = signal<number>(5)
  effect = logEffect(this.logLevel, this.testSignal)

  changeTestSignal(newVal: number){
    this.testSignal.set(newVal);
  }
}

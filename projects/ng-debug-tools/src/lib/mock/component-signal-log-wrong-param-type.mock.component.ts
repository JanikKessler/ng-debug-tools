import {Component} from '@angular/core';
import {logComponentSignals} from '../component-signal-log/log-component-signals-effect';

@Component({
    selector: 'test-mock-wrong-param-type',
    template: `
    <div>
        mock wrong param type works!
    </div>
    `,
})
export class ComponentSignalLogWrongParamTypeMockComponent {
    effect = logComponentSignals({})

}

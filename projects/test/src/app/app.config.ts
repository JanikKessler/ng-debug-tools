import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Route} from '@angular/router';
import {LogEffectComponent} from './log-effect/log-effect.component';
import {LogComponentSignalsComponent} from './log-component-signals/log-component-signals.component';

export const routes: Route[] = [
    {
        path: 'logEffect',
        component: LogEffectComponent
    }, {
        path: 'logComponentSignals',
        component: LogComponentSignalsComponent
    }]

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes)]
};

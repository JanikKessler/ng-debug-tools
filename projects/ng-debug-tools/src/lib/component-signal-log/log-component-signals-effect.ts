import {computed, EffectRef, isSignal, Signal, WritableSignal} from '@angular/core';
import {logEffect} from '../log-effect/log-effect';
import {isComponent} from '../utils/component-type-guard';
import {getComponentName} from '../utils/get-component-name';


export const logComponentSignals = (component: object): EffectRef => {
    if (!isComponent(component)) {
        throw new Error('Provided context is not a angular component');
    }

    const header = ['Logging Signals for Conponent', getComponentName(component)];
    const signals = findComponentSignals(component);
    const logParamSignal = computed(() => `%c${header[0]}: ${header[1]}:%c\n` + [...signals.entries()].reduce((accumulatedString, currSignal) => {
        if (accumulatedString === '') {
            return `${currSignal[0]}: ${currSignal[1]()}`;
        }
        return `${accumulatedString}\n${currSignal[0]}: ${currSignal[1]()}`
    }, ''));
    return logEffect(logParamSignal, 'font-weight: bold');

}


// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function findComponentSignals(component: Record<string, any>): Map<string, Signal<unknown> | WritableSignal<unknown>> {
    const propertyNames = Object.getOwnPropertyNames(component);
    const signals = new Map<string, Signal<unknown> | WritableSignal<unknown>>();

    for (const propertyName of propertyNames) {
        const property = component[propertyName];
        if (property && isSignal(property)) {
            signals.set(propertyName, property);
        }
    }

    return signals;
}

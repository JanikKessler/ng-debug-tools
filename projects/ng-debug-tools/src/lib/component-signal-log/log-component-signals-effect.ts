import {computed, EffectRef, isSignal, Signal, WritableSignal} from '@angular/core';
import {logEffect} from '../log-effect/log-effect';
import {isComponent} from '../utils/component-type-guard';


export const logComponentSignals = (component: Object): EffectRef => {
    if (!isComponent(component)) {
        throw new Error('Provided context is not a angular component');
    }

    const signals = findComponentSignals(component);
    const logParamSignal = computed(() => [...signals.entries()].reduce((accumulatedString, currSignal) => {
        if (accumulatedString === '') {
            return `${currSignal[0]}: ${currSignal[1]()}`;
        }
        return `${accumulatedString}\n${currSignal[0]}: ${currSignal[1]()}`
    }, ''));
    return logEffect(logParamSignal);

}


export function findComponentSignals(component: any): Map<string, Signal<unknown> | WritableSignal<unknown>> {
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

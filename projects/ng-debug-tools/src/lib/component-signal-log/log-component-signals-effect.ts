import {computed, EffectRef, isSignal, Signal, WritableSignal} from '@angular/core';
import {logEffect} from '../log-effect/log-effect';


export const logComponentSignals = (component: unknown): EffectRef => {
    const signals = findComponentSignals(component);
    const logParamSignal = [...signals.entries()].map(([key, value]) => {
        return computed(() => `${key}: ${value()} \n`)
    });
    return logEffect(...logParamSignal);

}


export function findComponentSignals(component: unknown): Map<string, Signal<unknown> | WritableSignal<unknown>> {
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

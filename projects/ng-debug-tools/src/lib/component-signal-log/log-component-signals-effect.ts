import {EffectRef, isSignal, Signal, WritableSignal} from '@angular/core';
import {logEffect} from '../log-effect/log-effect';


export const logComponentSignals = (component: any): EffectRef => {
    const signals = findComponentSignals(component);
    return logEffect('test',...signals);

}


export function findComponentSignals(component: any): (Signal<unknown> | WritableSignal<unknown>)[]
{
    // Get all property names of the component instance
    const propertyNames = Object.getOwnPropertyNames(component);

    // Initialize result object
    const signals: (Signal<unknown> | WritableSignal<unknown>) [] = [];

    // Iterate through properties
    for (const propertyName of propertyNames) {
        const property = component[propertyName];

        // Check if property is a Signal
        if (property && isSignal(property)) {
            signals.push(property);
        }
    }

    return signals;
}

import {Component, Type} from '@angular/core';

export function isComponent(classInstance: unknown): boolean {
    return Object.getPrototypeOf(classInstance).constructor.prototype.constructor["ɵcmp"] !== undefined
}

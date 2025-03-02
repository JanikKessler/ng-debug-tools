export function getComponentName(classInstance: unknown): string {
    return Object.getPrototypeOf(classInstance).constructor.name.replace('_','')
}

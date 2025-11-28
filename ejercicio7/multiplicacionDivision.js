export function multiplicar(a, b) {
    return a * b;
}
export function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede hacer la division entre 0")
    }
    return a / b;
}
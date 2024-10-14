function calcularMCM(num1, num2) {
    // Función para calcular el máximo común divisor (MCD)
    function calcularMCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // El MCM se calcula usando la fórmula: MCM(a, b) = (a * b) / MCD(a, b)
    const mcd = calcularMCD(num1, num2);
    return (num1 * num2) / mcd;
}
// Ejemplo de uso:
const num1 = 12;
const num2 = 15;
const mcm = calcularMCM(num1, num2);
console.log(`El mínimo común múltiplo de ${num1} y ${num2} es: ${mcm}`);

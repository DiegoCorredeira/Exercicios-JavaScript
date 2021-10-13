/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function inteiros(A, B) {
    let resultado = 0
    for (let i = 0; i < B; i++)
        resultado += A
    return resultado
}
console.log(inteiros(9, 8))
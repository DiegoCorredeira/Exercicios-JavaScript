/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/
function maiorOuIgual(a, b) {
    if (typeof a != typeof b)
        return false
    return a >= b
}
console.log(maiorOuIgual(9,7))
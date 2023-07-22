/*

function sum(value, value2) {
    return value + value2 
}

const result = sum(10, 20)
console.log(result + " resultado")

*/


const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0
let totDiscount = 0
let totValue = 0

function calculateDiscount(price, discount) {
    return (price * discount) / 100
}


cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10) // Aqui vai calcular o desconto
        finalValue += (value - discount)
        totDiscount += discount
        totValue += value
    } else {
        finalValue += value
        totValue += value
    }

});

console.log(`O valor final foi de R$ ${totValue}, porém você teve desconto de R$ ${totDiscount.toFixed(2)}, irá pagar apenas R$ ${finalValue}`)
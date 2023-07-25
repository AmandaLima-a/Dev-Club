/*
    MAP => serve para mapear o nosso array.
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array, com a mesma quanidade de itens do array original
        - Aceita 3 parâmetros:
            > item do array
            > index
            > array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map( item => item * 2)

console.log(double)

const list = [
    {name: 'Amanda', vip: true },
    {name: 'Rodolfo', vip: false },
    {name: 'Maria', vip: true },
    {name: 'Cirilo', vip: true },
    {name: 'Julio', vip: false },
    {name: 'Lucca', vip: true },
    {name: 'Bruno', vip: false }
]

const newList = list.map( user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList)


const students = [
    {name: 'Amanda', testGrade: 7 },
    {name: 'Rodolfo', testGrade: 5 },
    {name: 'Maria', testGrade: 8 },
    {name: 'Cirilo', testGrade: 9 },
    {name: 'Julio', testGrade: 3 },
    {name: 'Lucca', testGrade: 2 },
    {name: 'Bruno', testGrade: 10 }
]

const resultList = students.map( student => {
    return {
        name: student.name,
        result: student.testGrade >= 5 ? 'APROVADO!' : 'REPROVADO!'
    }
})

console.log(resultList)

const users = [
    { name: 'Rodolfo', age: 33, contact: '(19) 94343-4343' },
    { name: 'Paulo', age: 22, contact: '(19) 95656-5454' },
    { name: 'Aline', age: 15, contact: '(19) 93443-3434' },
    { name: 'Maria', age: 40, contact: '(19) 92334-4332' }
]

users.forEach((item, index ) => { // mesma coisa que ( function (item, index){} )
    console.log(index)   // vai mostrar a posição do intem
    console.log(item)
});
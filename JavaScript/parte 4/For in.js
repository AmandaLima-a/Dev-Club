const users = {name: 'Amanda', age: 20, street: 'Rua dos bobos'}

//users.name -> Amanda
//users['name'] -> Amanda

for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}
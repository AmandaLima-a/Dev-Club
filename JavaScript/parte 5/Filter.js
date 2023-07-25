/*
    FILTER
      - Cria um novo array, a partir do array percorrido
      - Cria um novo array APENAS com os elementos filtrados
      - Aceita 3 parâmetros:
        > item do array
        > index
        > array completo

        return true -> Item atual passa pro novo array
        return false -> Item atual NÃO passa pro novo array
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter( item => {    //   ou  const newList = list.filter( item => item > 100)
    if (item > 100) return true
    else return false
})

// console.log(newList)


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckeberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const newCompanies = companies.filter( company => {
    if ( company.marketValue < 200 && company.foundedOn > 1990) return true 
    else return false
})

console.log(newCompanies)
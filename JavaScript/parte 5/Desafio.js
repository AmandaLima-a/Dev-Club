

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckeberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const newList = companies.map( company => {
    return {
        name: company.name,
        marketValue: ((company.marketValue * 10) / 100) + company.marketValue,
        CEO: company.CEO,
        foundedOn: company.foundedOn
    }
})

// console.log(newList)

const newCompanies = newList.filter( item => item.foundedOn < 1990)

// console.log(newCompanies)

const sum = newCompanies.reduce( (acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(sum)


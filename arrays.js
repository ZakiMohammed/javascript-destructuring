// simple
// const hero = ['Harry', 'Potter']

// const [firstName, lastName] = hero

// function
const hero = 'Harry Potter'

const [firstName, lastName] = hero.split(' ')

console.log(firstName)
console.log(lastName)

// with default value
const [city, country = 'US'] = ['Pittsburgh']

console.log(city, country)

// swap
let a = 10, b = 20;

[a, b] = [b, a]

console.log(a, b)

// returned array from function
const getLocation = () => [18.971614433596187, 72.81923097560794]

const [lat, lng] = getLocation()

console.log(lat, lng)

// passed array to function
const setLocation = ([lat, lng]) => console.log('Store', lat, lng)

setLocation([18.971614433596187, 72.81923097560794])
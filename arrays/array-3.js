// default value

const address = ['Pittsburgh', 'Pennsylvania']

const [city, state, country = 'US'] = address

console.log(city, state, country)   // Pittsburgh Pennsylvania US
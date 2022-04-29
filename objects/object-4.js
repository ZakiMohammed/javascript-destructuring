// nested object

const address = {
    id: 1,
    street: 'Kulas Light',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
        lat: -37.3159,
        lng: 81.1496
    }
}

const { city, geo: { lat, lng } } = address

console.log(city, lat, lng)
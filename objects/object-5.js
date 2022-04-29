// nested nested object

const employee = {
    id: 1,
    name: 'Allen Green',
    job: 'Clerk',
    department: {
        id: 1,
        name: 'Accounts',
        geo: {
            lat: -54.4241,
            lng: 32.8973
        }
    }
}

const { name, department: { geo: { lat, lng } } } = employee

console.log(name, lat, lng)
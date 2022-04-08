const person = { id: 1, name: 'John Doe', age: 21 }

// simple
const { name } = person

console.log(name)

// alias
const { name: personName } = person

console.log(personName)

// with default value
const { id, age, salary = 0 } = person

console.log(id, age, salary)

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

// nested object
const { city, geo: { lat, lng } } = address

console.log(city, lat, lng)

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

// nested nested object
const { name: employeeName, department: { geo: { lat: deptLat, lng: deptLng } } } = employee

console.log(employeeName, deptLat, deptLng)

const post = {
    id: 1,
    title: 'Voluptate occaecat',
    body: 'Elit eu ullamco sit elit magna id incididunt culpa.',
    comments: [
        {
            id: 1,
            body: 'Incididunt elit magna ipsum adipisicing nisi eu.'
        },
        {
            id: 2,
            body: 'Et voluptate occaecat esse esse nisi eu ullamco duis nisi sint aliquip.'
        },
        {
            id: 3,
            body: 'Deserunt ullamco aliquip veniam quis duis sunt.'
        },
    ]
}

// nested array
const { title, comments } = post

console.log(title, comments)

// nested array - destructure array
const { title: postTitle, comments: [comment1, comment2] } = post

console.log(postTitle, comment1.body, comment2.body)

const getProduct = () => ({
    id: 1,
    name: 'Wildcraft Bag',
    price: 1200,
    color: 'Red'
})

// returned object from function
const { id: productId, price, color } = getProduct()

console.log(productId, price, color)

// passed object to function
const setProduct = ({ id, name, price, color }) => console.log('Store', id, name, price, color)

setProduct({
    id: 1,
    name: 'Woodland Shoes',
    price: 3000,
    color: 'Brown'
})

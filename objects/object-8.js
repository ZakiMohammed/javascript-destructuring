// from function

const getProduct = () => ({
    id: 1,
    name: 'Wildcraft Bag',
    price: 1200,
    color: 'Red'
})

const { id, price, color } = getProduct()

console.log(id, price, color)
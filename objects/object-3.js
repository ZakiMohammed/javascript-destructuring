// default value

const person = { id: 1, name: 'John Doe', age: 21 }

const { name, age, salary = 0 } = person

console.log(name, age, salary)    // John Doe 21 0
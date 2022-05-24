// spread with de-structuring

const marks = [[54, 65, 93], [48, 58, 39], [85, 95, 73]]

const [[...marks1], marks2] = marks

console.log(marks[0] === marks1)     // false
console.log(marks[1] === marks2)     // true
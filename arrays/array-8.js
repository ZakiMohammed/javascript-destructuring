// spread with de-structuring

const marks = [[54, 65, 93], [48, 58, 39], [85, 95, 73]]

const [[...mark1], mark2] = marks

console.log(marks[0] === mark1)     // false
console.log(marks[1] === mark2)     // true
// all the power combined: spread, rest, destruct

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

// spread to create new object while destructuring
const { name, department: { ...department } } = employee

console.log(name, department)
console.log(employee.department === department)

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

// spread to create new array while destructuring
const { title, comments: [...comments] } = post

console.log(title, comments)
console.log(post.comments === comments)

// rest operator with destructed object
const getResult = ({ total, min }, ...marks) => {
    const obtained = marks.reduce((acc, crr) => acc + crr, 0)
    const percentage = +(obtained / total * 100).toFixed(2)

    return ({
        obtained,
        percentage,
        remarks: percentage < min ? 'Failed' : 'Passed'
    })
}

const resultData = { total: 300, min: 35, max: 75 }
const { percentage, remarks } = getResult(resultData, 83, 56, 76)

console.log(`You have scored ${percentage}% with "${remarks}" remark!`)
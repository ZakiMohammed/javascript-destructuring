// rest with de-structuring

const employee = {
    id: 1,
    name: 'Allen Green',
    job: 'Clerk',
    salary: 1200
}

const { id, name, ...others } = employee

console.log(id, name, others)   // 1 Allen Green { job: 'Clerk', salary: 1200 }
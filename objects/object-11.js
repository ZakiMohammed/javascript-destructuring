// spread with de-structuring

const employee = {
    id: 1,
    name: 'Allen Green',
    job: 'Clerk',
    salary: 1200,
    department: {
        id: 1,
        name: 'Accounts'
    }
}

const { name, department: { ...department } } = employee

console.log(employee.department === department)     // false
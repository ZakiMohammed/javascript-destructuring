// nested array - destructure array

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

const { title, comments: [comment1, comment2] } = post

console.log(title, comment1.body, comment2.body)
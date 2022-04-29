// realistic scenario

const getResult = ({ perSubject, min }, ...marks) => {
    const obtained = marks.reduce((acc, crr) => acc + crr, 0)
    const total = perSubject * marks.length
    const percentage = +(obtained / total * 100).toFixed(2)

    const remarks = percentage < min ? 'Failed' : 'Passed'

    return { obtained, percentage, remarks }
}

const options = { perSubject: 100, min: 35 }
const { percentage, remarks } = getResult(options, 83, 56, 76)

console.log(`Percentage: ${percentage}%, Remark: ${remarks}`)
// rest with de-structuring

const languages = ['JavaScript', 'Node.js', 'C#', 'Java', 'C']

const [lang1, lang2, ...others] = languages

console.log(lang1, lang2, others)

const fs = require('fs')

const name = {
    name: 'David',
    planet: 'Earth',
    age: 30
}

let dataJSON = JSON.stringify(name)

const writeJSON = fs.writeFileSync('1-JSON.json', dataJSON)
const readJSON = fs.readFileSync('1-JSON.json')

const dataJSON1 = readJSON.toString()
const parsedJSON = JSON.parse(dataJSON1)
console.log(parsedJSON)







// const book = {
//     title: 'Mastery',
//     author: 'Robert Greene'
// }

// const bookJSON = JSON.stringify(book)

// // fs.writeFileSync('1-JSON.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-JSON.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)


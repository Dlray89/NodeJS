const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes'
}

const removeNote = (title) => {
    const notes = loadNOtes()

    const match = notes.filter((note) => note.title !== title
    )




    if (notes.length > match.length) {
        console.log(chalk.red.inverse('note removed'))
    } else {
        console.log(chalk.red.inverse('NO note found'))
    }
    saveNotes(match)
}

const addNote = (title, body) => {
    const notes = loadNOtes()

   

    const dupsNote = notes.find((note) => note.title == title)

    if (!dupsNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('new note added!'))

    } else {
        console.log(chalk.red.bold.inverse('NOte title taken'))
    }



}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNOtes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }

}

const listNodes = () => {
    const notes = loadNOtes()

    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i])
    }
}

const readNOtes = (title) => {
    const notes = loadNOtes()

    const findNOte = notes.find((note) => note.title == title )

    if(findNOte) {
        console.log(chalk.inverse.blueBright(findNOte.title))
        console.log(chalk.inverse.blueBright(findNOte.body))
    } else {
        console.log(chalk.redBright('Note not found'))
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNodes: listNodes,
    readNOtes: readNOtes
}
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
        console.log(chalk.magenta('Your note has been removed'))
    } else {
        console.log(chalk.red.underline("The note your looking for doesn't exist"))
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
        console.log(chalk.greenBright.inverse('New Note added!'))
        console.log(chalk.greenBright('To view notes type command *node app.js list'))

    } else {
        console.log(chalk.bold.red.inverse('Note title is taken. \n'))
        console.log(chalk.bold.yellow('Try Again!!'))
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
    console.log(chalk.cyan('       | Your Note List |'))
    console.log(chalk.cyan('-----------------------------------'))
    for (let i = 0; i < notes.length; i++) {
        
        console.log(chalk.magenta(notes[i].title, notes[i].body))
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
const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return 'Your notes'
}

const removeNote = function(title){
  const notes = loadNOtes()

  const match = notes.filter(function(note){
        return note.title !== title
  })
   if(notes.length > match.length){
       console.log(chalk.red.inverse('note removed'))
   } else {
       console.log(chalk.red.inverse('NO note found'))
   }
  saveNotes(match)
}

const addNote = function(title, body){
    const notes = loadNOtes()

    const dups = notes.filter(function(note) {
            return note.title == title
    })

    if (dups.length === 0) {
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

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNOtes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch(e){
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
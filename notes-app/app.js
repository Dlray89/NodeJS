const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')


// create add command
yargs.command({
    command: 'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create a remove command
yargs.command({
    command: 'remove',
    describe:' remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//read a note

yargs.command({
    command:'read',
    describe:'read a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'stringS'

        }
    },
    handler(argv){
        notes.readNOtes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List of all notes',
    handler(){
        notes.listNodes()
    }
})
// add , remove, read, list notes
console.log(yargs.argv)
// console.log(process.argv)
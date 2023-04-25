const chalk = require('chalk')
const Notes = require('./Notes')
const yargs = require('yargs')

//customize yargs version 
yargs.version('1.1.0')
//create add commoand

yargs.command({
    command:'read',
    describe:'this command is for reading the note',
    bulider:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        Notes.readNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'this is for listing the node',
    handler(){
        Notes.listNote()
    }
})

yargs.command({
    command: 'add',
    describe: 'this is for adding the note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.addNote(argv.title, argv.body)
    }
})
//crete a remove command
yargs.command({
    command: 'remove',
    describe: 'this is for removing the note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.removeNote(argv.title)
    }
}
)

yargs.parse()
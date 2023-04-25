const fs = require('fs')
const chalk = require('chalk')

const readNotes =(title)=>{
    const notes = loadNotes()
    // const readNote = notes.filter((note)=>note.title===title)
    const readNote = notes.find((note=>note.title===title))
    
    if(!readNote){
        console.log(chalk.blue.inverse('this title is not persent in file!!!'))
    }else{
        console.log(chalk.white.inverse('title: '+readNote.title))
        console.log('body: '+readNote.body)
    }
}

const listNote =()=>{
    const notes = loadNotes()
    if(notes.length===0){
        console.log(chalk.red.inverse('No note is persent in file!!!'))
    }else{
        console.log(chalk.white.inverse('see the given list of titles!!'))
        for(i=0;i<notes.length;i++){
            console.log(notes[i].title)
            
        }
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

     const notestokeep = notes.filter((note)=>note.title !== title)

    if(notestokeep.length < notes.length){
        saveNotes(notestokeep)
        console.log(chalk.green.inverse('Node removed!!!'))
    }else{
        console.log(chalk.red.inverse('No node found!!!'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note)=>note.title ===title)
    const duplicateNote = notes.find((note=>note.title===title))

   if (!duplicateNote){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('new note added!!!'))
   }else{
    console.log(chalk.red.inverse('note title taken, please enter a new title!!!'))
   }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return (JSON.parse(dataJSON))
    } catch (e) {
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNotes:readNotes
}
import './App.css';
import {Input} from './components/Input';
import {NotesList} from './components/Note';
import {Title} from './components/Title';
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';

let notesJSON =  require('./notes.json');

function App() {

  const [notes, setNotes] = useState(notesJSON.notes);
  let noteID = notes.length + 1;
  const [inputNote, setInputNote] = useState(
    {
      text: "Write your note here",
      id: noteID
    }
  );

  const addNote = (event) => 
  {
    event.preventDefault();
    if (inputNote.text != ""){
      setNotes(notes.concat(inputNote));
      noteID += 1;
      setInputNote(
        {
          text: "",
          id: noteID
        });
      }
  };

  const clearNotes = (event) => 
  {
    event.preventDefault();
    setNotes([]);
    noteID = 1;
    setInputNote(
      {
        text: "",
        id: noteID
      });
  };

  
  return (
    <div className='Body'>
      <NavBar/>
      <div className=''>
        <Title title='Home Kitchen'/>
        <NotesList notes={notes} />
        <Input inputNote={inputNote} updateInputNote={(c) => setInputNote(c)}
          addNote={addNote} clearNotes={clearNotes} />
      </div>
    </div>
  );
}

export default App;

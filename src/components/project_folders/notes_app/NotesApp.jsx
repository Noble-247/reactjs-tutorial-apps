import React from "react";
import "./NotesApp.css";
import NotesAppSidebar from "./notes_app_components/NotesAppSidebar";
import NotesAppEditor from "./notes_app_components/NotesAppEditor";
import { NotesAppData } from "./NotesAppData";
import Split from "react-split";
import { nanoid } from "nanoid";

function NotesApp() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    // localStorage.clear();
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "## Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    //Try rearranging the notes such that the most recently edited note to the top
    setNotes((oldNotes) => {
      const newArray = [];

      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }

      return newArray;
    });
  }

  //this function does not send the most recent-edited note to the top
  /* function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  } */

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
    console.log("Deleted note", noteId);
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction='horizontal' className='split'>
          <NotesAppSidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <NotesAppEditor
              currentNote={findCurrentNote()}
              updateNote={updateNote}
            />
          )}
        </Split>
      ) : (
        <div className='no-notes'>
          <h1>You have no notes</h1>
          <button className='first-note' onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default NotesApp;

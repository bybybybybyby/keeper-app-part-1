import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([{ title: "Groceries", content: "Buy apples and bananers" }]);

    function addNote(note) {
        setNotes(prevNotes => {
            return (
                [...prevNotes, { title: note.title, content: note.content }]
            );
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return (index !== id)
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, idx) => {
                return <Note
                    key={idx}
                    id={idx}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;

import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateNote from "./components/createNote";

function App() {
  const [note, setNote] = useState([]);

  function handleClick(noteInput) {
    setNote((prevValue) => {
      return [...prevValue, noteInput];
    });
  }

  function handleKeyPress(event, noteInput) {
    if (event.key === "Enter") {
      setNote((prevValue) => {
        return [...prevValue, noteInput];
      });
    }
  }

  function handleDelete(id) {
    setNote((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app">
      <Header />
      <CreateNote handleClick={handleClick} handleKeyPress={handleKeyPress} />
      <div className="note-area">
        {note.map((note, index) => {
          return (
            <Note
              title={note.title}
              content={note.content}
              key={index}
              id={index}
              delete={handleDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

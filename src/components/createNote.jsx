import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { ZoomIn } from "@material-ui/icons";

function CreateNote(props) {
  const [noteInput, setNoteInput] = useState({
    title: "",
    content: "",
  });

  const [zoomIn, setZoomIn] = useState(false);

  function inputNote(event) {
    const { name, value } = event.target;

    setNoteInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.handleClick(noteInput);
    setNoteInput({
      title: "",
      content: "",
    });
    setZoomIn(false);
    event.preventDefault();
  }

  function handleTextClick() {
    setZoomIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoomIn && (
          <input
            onChange={inputNote}
            name="title"
            placeholder="Title"
            value={noteInput.title}
          />
        )}
        <textarea
          onClick={handleTextClick}
          onChange={inputNote}
          name="content"
          placeholder="Take a note..."
          value={noteInput.content}
          rows={zoomIn ? 3 : 1}
        />
        <Zoom in={zoomIn}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;

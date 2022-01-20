import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpand] = useState(false);

  function handleChange(event) {
    let { name, value } = event.target;
    setNote((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }
  function submitNote(event) {
    props.infoRelay(note.title, note.content);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
          autoFocus
        />}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

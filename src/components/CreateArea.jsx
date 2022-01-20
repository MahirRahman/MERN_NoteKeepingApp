import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

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
  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

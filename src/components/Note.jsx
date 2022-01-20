import React from "react";
import { useNavigate } from "react-router-dom";


function Note(props) {
  const navigate = useNavigate();
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteItem(props.id)}>DELETE</button>
      <button onClick={() => navigate(`/edit/${props.id}/${props.title}/${props.content}`)}> EDIT </button>
      <button id="date"> {props.date} </button>
    </div>
  );
}

export default Note;

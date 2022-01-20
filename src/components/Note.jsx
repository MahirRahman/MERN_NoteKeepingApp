import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  const navigate = useNavigate();
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteItem(props.id)}>
        <DeleteIcon />
      </button>
      <button onClick={() => navigate(`/edit/${props.id}/${props.title}/${props.content}`)}> 
        <EditIcon />
      </button>
      <button id="date"> {props.date} </button>
    </div>
  );
}

export default Note;

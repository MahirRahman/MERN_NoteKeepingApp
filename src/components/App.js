import React from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState, useEffect } from "react";

function App() {
  let [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await fetch(`${process.env.BACKEND_URI}note/`);
  
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const notes = await response.json();
      setItems(notes);
    }
  
    getItems();
  
    return;
  }, [items.length]);

  async function passInfo(titleSubmitted, contentSubmitted) {
    var today = getDate();
    const newNote = {title: titleSubmitted, content: contentSubmitted, date: today}
    console.log(JSON.stringify(newNote));
    setItems((prevItems) => {
      return [...prevItems, {title: titleSubmitted, content: contentSubmitted}];
    });
    await fetch(`${process.env.BACKEND_URI}note/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
 
  }
  async function deleteItem(id) {
    console.log(items);
    setItems(items.filter((item, index) => item._id !== id));
    await fetch(`${process.env.BACKEND_URI}${id}`, {
     method: "DELETE"
   });
  //  navigate("/loading");
  }

  function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;
  }

  return (
    <div>
      <Header />
      <CreateArea infoRelay={passInfo} />
      {items.map((note, index) => (
        <Note
          deleteItem={deleteItem}
          key={index}
          id={note._id}
          title={note.title}
          content={note.content}
          date={note.date}
        />
      ))}
    </div>
  );
}

export default App;

import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useState } from "react";

function Header() {
  const [isHovering, setHover] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  function enter() {
    setHover(true);
  }

  function exit() {
    setHover(false);
  }

  function play() {
    setPlaying(true);
  }
  function noplay() {
    setPlaying(false);
  }

  return (
    <header>
      <h1><HighlightIcon /> Keeper</h1>
      <div>
        <a onMouseEnter={play} onMouseLeave={noplay} className='navbar-items' id='simongamelink' href="https://620d5400bb29e66d425d215a--tender-feynman-40f8fd.netlify.app/"><SportsEsportsIcon fontSize={isPlaying? "large":"inherit"} viewBox= "0 0 24 24" /> Play A Game</a>
      </div>
      <div className='navbar-items dropdown' onMouseEnter={enter} onMouseLeave={exit}>
  
        <p> Projects</p>
        <div className="after" id={isHovering ? "fadein" : ""}></div>
        <div className='dropdown-items'>
          <p>
            NoteKeeper
          </p>
          <p> 
            Movie Browser
          </p>
        </div>
      </div>
      <a href="/login"><button className='loginbtn navbar-items'>Log In</button></a>
    </header>
  );
}

export default Header;

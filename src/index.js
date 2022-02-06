import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Signup from "./components/Signup";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Routes>
       <Route exact path="/" element={<App />} />
       <Route path="/edit/:id/:title/:content" element={<Edit />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />}  />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

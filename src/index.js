import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Routes>
       <Route exact path="/" element={<App />} />
       <Route path="/edit/:id/:title/:content" element={<Edit />} />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

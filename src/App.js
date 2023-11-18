// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Todolist from "./component/Routess/FormeTasks.js";
import Home from "./component/Routess/home.js";
import Calc from "./component/Routess/Calcul.js";
import Menu from "./component/Routess/Navbar.js";
import Slider from "./component/Routess/Slider.js";
import Api from "./component/Routess/appi.js";
import { I18nextProvider } from 'react-i18next';
import i18n from './component/Routess/i18n.js';
import { LangProvider } from './component/mycontexte/Langcontext.js'; // Update import
import Ccontent from './component/Routess/Ccontent.js';
import Cicones from './component/Routess/cicones.js';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calc" element={<Calc />} />
          <Route path="/Todolist" element={<Todolist />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Multilangue" element={<Cicones />} />
          <Route path="*" element={<h1>404<br />Page not found</h1>} />
        </Routes>
      </div>
    </LangProvider>
  );
}

export default App;

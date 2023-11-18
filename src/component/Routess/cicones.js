import React, { useContext } from 'react';
import Imen from "../assets/united-kingdom.svg";
import Imes from "../assets/spain.svg";
import Imfr from "../assets/france.svg";
import { Langc } from "../mycontexte/Langcontext.js";
import Ccontent from './Ccontent.js';
import "./cs.css";
export default function Cicones() { // Capitalize the component name
  const { setLang } = useContext(Langc);
  

  return (
    <div>
      <img class="i" onClick={() => setLang("en")} src={Imen} width="50" height="50"  alt="" />
      <img class="i" onClick={() => setLang("fr")} src={Imfr} width="50" height="50" alt="" />
      <img class="i" onClick={() => setLang("esp")} src={Imes} width="50" height="50" alt="" />
      <Ccontent/>
    </div>
  );
}


import React, { useState } from 'react';
import "./home.css";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <button onClick={toggleTheme}>
          {isDarkMode ? ' Light Mode' : ' Dark Mode'}
    </button>
      <center>
      <h2> NTIC-Tanger</h2>
      <h5>Dévloppement digital option Web Full Stack</h5>
      <table>
        <tr id="tete">
          <td id="te">ID Modules</td>
          <td id="te">Nom Modules</td>
          <td id="te">MHT</td>
          <td id="te">COEF</td>
          <td id="te">EFM Régional</td>
        </tr>
        <tr>
          <td>M201</td>
          <td>Préparation d'un projet web</td>
          <td>60</td>
          <td>1</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>M202</td>
          <td>Approche agile</td>
          <td>120</td>
          <td>3</td>
          <td>Oui</td>
        </tr>
        <tr>
          <td>M203</td>
          <td>Gestion de données</td>
          <td>90</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr id="mm">
          <td>M204</td>
          <td>Dévloppement front-end</td>
          <td>90</td>
          <td>3</td>
          <td>Oui</td>
        </tr>
        <tr>
          <td>M205</td>
          <td>Dévloppement back-end</td>
          <td>120</td>
          <td>3</td>
          <td>Oui</td>
        </tr>
        <tr>
          <td>M206</td>
          <td>Création d'une application cloud native</td>
          <td>90</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>M207</td>
          <td>Projet de syntèse</td>
          <td>60</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>M208</td>
          <td>Intégration du milieu professionnel</td>
          <td>160</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>EGTS202</td>
          <td>Français</td>
          <td>115</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>EGTS203</td>
          <td>Anglais</td>
          <td>50</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>EGTS204</td>
          <td>Cultures entrepreneuriales</td>
          <td>45</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>EGTS205</td>
          <td>Softskills</td>
          <td>30</td>
          <td>2</td>
          <td>Non</td>
        </tr>
        <tr>
          <td>EGTS208</td>
          <td>PIE</td>
          <td>80</td>
          <td>2</td>
          <td>Non</td>
        </tr>
      </table>
      </center>
    </div>
  )
}

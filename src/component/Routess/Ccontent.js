import React, { useContext } from 'react'; // Import useContext from React
import Data from "../assets/data.js";
import { Langc } from '../mycontexte/Langcontext.js';

export default function Ccontent() {
    const { lang } = useContext(Langc);
    
    return (
        <div>
            <br></br><br></br>
            <h2>{Data[lang].title}</h2>
            <p>{Data[lang].txt}</p>
            
            
        </div>
    );
}

// Langcontext.js
import React, { createContext, useState } from 'react';

const Langc = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  return (
    <Langc.Provider value={{ lang, setLang }}>
      {children}
    </Langc.Provider>
  );
};

export { Langc, LangProvider };

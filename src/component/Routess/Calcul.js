import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const calculatorStyle = {
    width: '300px',
    margin: '50px auto',
    borderRadius: '10px',
    border:"solid 2px #ccc",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };
  const displayStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'right',
  };

  const buttonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  };

  const buttonStyle = {
    backgroundColor:"gray",
    color:"#ffe0b2",
    fontSize: '18px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    
  };

  const clearButtonStyle = {
    gridColumn: 'span 2',
    backgroundColor:"#ffe0b2",
    color:"gray",
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };
  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div style={calculatorStyle}>
      
      <div style={displayStyle}>{input}</div>
      <div style={buttonContainerStyle}>
        {[7, 8, 9, '/'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[4, 5, 6, '*'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[1, 2, 3, '-'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {[0, '.', '=', '+'].map((value) => (
          <button key={value} style={buttonStyle} onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}>
            {value}
          </button>
        ))}
        <button style={clearButtonStyle} onClick={handleClear}>
          Clear
        </button>
        <button style={clearButtonStyle} onClick={backspace}>
            c
        </button>
      </div>
    </div>
  );
};

export default Calculator;

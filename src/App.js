import React, { useState } from 'react';
import './Calculator.css';

const App = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        <button className="span-two" onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default App;

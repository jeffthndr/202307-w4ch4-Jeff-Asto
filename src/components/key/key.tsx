import { useState } from 'react';

export function Keys() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const initialPrint = '';
  const [display, setDisplay] = useState(initialPrint);

  const handlePrintNumbers = (num) => {
    const newNumber = display + num;
    setDisplay(newNumber);
  };

  return (
    <ol className="keyboard">
      {numbers.map((item) => (
        <li key={item} className="key">
          <button onClick={() => handlePrintNumbers(item)} className="key">
            {item}
          </button>
        </li>
      ))}
      <li>
        <button className="key big">Delete</button>
      </li>
    </ol>
  );
}

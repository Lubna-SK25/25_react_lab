import React, { useState } from "react";

function Part1() {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: 0 }]);
  const [error, setError] = useState(false);

  const handleAddTextBox = () => {
    const newTextBoxes = [...textBoxes];
    newTextBoxes.push({ id: Date.now(), value: 0 });
    setTextBoxes(newTextBoxes);
  };

  const handleDeleteTextBox = (id) => {
    const newTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(newTextBoxes);
  };

  const handleTextBoxChange = (id, event) => {
    const newValue = event.target.value;
    // Allow backspace (keyCode 8) and numeric digits (48-57)
    if (/^\d*$/.test(newValue)) {
      setError(false);
      const newTextBoxes = textBoxes.map((textBox) => {
        if (textBox.id === id) {
          return {
            ...textBox,
            value: newValue === "" ? 0 : parseInt(newValue),
          };
        }
        return textBox;
      });
      setTextBoxes(newTextBoxes);
    } else {
      setError(true);
    }
  };

  // Calculate the sum of all values in textboxes
  const sum = textBoxes.reduce((total, textBox) => total + textBox.value, 0);

  return (
    <div>
      {textBoxes.map((textBox) => (
        <div key={textBox.id}>
          <input
            type="text"
            value={textBox.value}
            onChange={(event) => handleTextBoxChange(textBox.id, event)}
          />
          <button onClick={() => handleDeleteTextBox(textBox.id)}>
            Delete
          </button>
        </div>
      ))}
      {error && <div style={{ color: "red" }}>Please enter numbers only!</div>}
      <button onClick={handleAddTextBox}>Add</button>
      <div>Total textboxes: {textBoxes.length}</div>
      <div>Sum: {sum}</div>
    </div>
  );
}

export default Part1;

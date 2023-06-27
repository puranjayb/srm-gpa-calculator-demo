import React from 'react';

const Row = ({ id, credits, grade, onCreditsChange, onGradeChange }) => {
  const handleCreditsChange = (e) => {
    onCreditsChange(id, e.target.value);
  };

  const handleGradeChange = (e) => {
    onGradeChange(id, e.target.value);
  };

  return (
    <div className="row">
      <input
        type="number"
        placeholder="Credits"
        value={credits}
        onChange={handleCreditsChange}
      />
      <select value={grade} onChange={handleGradeChange}>
        <option value="">Select Grade</option>
        <option value="O">O</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="F">F</option>
      </select>
    </div>
  );
};

export default Row;

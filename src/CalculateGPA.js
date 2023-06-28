import React, { useState, useEffect } from 'react';
import './CalculateGPA.css';

const CalculateGPA = () => {
  const [rows, setRows] = useState(Array(7).fill({ credit: 'Credits', grade: 'Grade' }));
  const [cgpa, setCGPA] = useState(0);

  useEffect(() => {
    calculate();
  }, [rows]);

  const handleAddRow = () => {
    setRows([...rows, { credit: 'Credits', grade: 'Grade' }]);
  };

  const handleDeleteRow = () => {
    if (rows.length === 1) return;
    const updatedRows = [...rows];
    updatedRows.pop();
    setRows(updatedRows);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
    setRows(updatedRows);
  };

  const calculate = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    rows.forEach((row) => {
      const { credit, grade } = row;

      if (credit === 'Credits' || grade === 'Grade') {
        return;
      }

      const creditValue = parseInt(credit);

      switch (grade) {
        case 'O':
          totalGradePoints += creditValue * 10;
          break;
        case 'A+':
          totalGradePoints += creditValue * 9;
          break;
        case 'A':
          totalGradePoints += creditValue * 8;
          break;
        case 'B+':
          totalGradePoints += creditValue * 7;
          break;
        case 'B':
          totalGradePoints += creditValue * 6;
          break;
        case 'C':
          totalGradePoints += creditValue * 5;
          break;
        case 'F':
          totalGradePoints += creditValue * 0;
          break;
        default:
          break;
      }

      totalCredits += creditValue;
    });

    const cgpaValue = totalGradePoints / totalCredits;
    setCGPA(isNaN(cgpaValue) ? 0 : cgpaValue.toFixed(2));
  };

  return (
    <div className="container">
      <div className="result">
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${cgpa * 10}%` }}></div>
        </div>
        <div className="progress-bar-text">CGPA: {cgpa}</div>
      </div>

      <br></br>
      <br></br>
  <div className="row-container">
    {rows.map((row, index) => (
      <div className="row" key={index}>
        <select
          className="select"
          value={row.credit}
          onChange={(e) => handleChange(index, 'credit', e.target.value)}
        >
          <option value="Credits">Credits</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select
          className="select"
          value={row.grade}
          onChange={(e) => handleChange(index, 'grade', e.target.value)}
        >
          <option value="Grade">Grade</option>
          <option value="O">O</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="F">F</option>
        </select>
      </div>
    ))}
  </div>
  <div className="button-container">
    <button className="button" onClick={handleAddRow}>
      Add Row
    </button>
    <button
      className="button"
      onClick={handleDeleteRow}
      disabled={rows.length === 1}
    >
      Delete Last Row
    </button>
  </div>
</div>
  );
};

export default CalculateGPA;

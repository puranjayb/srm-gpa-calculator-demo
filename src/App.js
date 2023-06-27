import React, { useState } from 'react';
import Row from './row';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(Array(7).fill({ credits: '', grade: '' }));

  const handleCreditsChange = (id, value) => {
    const credits = parseInt(value);
  
    if (credits < 0) {
      setRows((prevRows) =>
        prevRows.map((row, index) =>
          index === id ? { ...row, credits: 0, negative: true } : row
        )
      );
    } else {
      setRows((prevRows) =>
        prevRows.map((row, index) => (index === id ? { ...row, credits: value, negative: false } : row))
      );
    }
  };
  

  const handleGradeChange = (id, value) => {
    setRows((prevRows) =>
      prevRows.map((row, index) => (index === id ? { ...row, grade: value } : row))
    );
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let cgpa = 0;

    rows.forEach((row) => {
      const credits = parseInt(row.credits);
      const grade = row.grade;

      if (!isNaN(credits) && grade !== '') {
        totalCredits += credits;

        switch (grade) {
          case 'O':
            cgpa += credits * 10;
            break;
          case 'A+':
            cgpa += credits * 9;
            break;
          case 'A':
            cgpa += credits * 8;
            break;
          case 'B+':
            cgpa += credits * 7;
            break;
          case 'B':
            cgpa += credits * 6;
            break;
          case 'C':
            cgpa += credits * 5;
            break;
          case 'F':
            cgpa += credits * 4;
            break;
          default:
            break;
        }
      }
    });

    if (totalCredits === 0) {
      return 0;
    }

    return (cgpa / totalCredits).toFixed(2);
  };

  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, { credits: '', grade: '' }]);
  };

  const handleDeleteRow = (id) => {
    setRows((prevRows) => prevRows.filter((row, index) => index !== id));
  };

  return (
    <div className="app">
      <h1>CGPA Calculator</h1>
      {rows.map((row, index) => (
        <Row
          key={index}
          id={index}
          credits={row.credits}
          grade={row.grade}
          onCreditsChange={handleCreditsChange}
          onGradeChange={handleGradeChange}
        />
      ))}
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={() => handleDeleteRow(rows.length - 1)}>Delete Row</button>
      <div className="result">
        CGPA: {calculateCGPA()}
      </div>
    </div>
  );
};

export default App;

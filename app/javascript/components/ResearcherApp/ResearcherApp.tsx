import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives } from '@api/endpoints';
import { IncentiveForm } from './IncentiveForm';


const ResearcherApp = () => {
  const [couponCodes, setCouponCodes] = useState([]);
  const [newCode, setNewCode] = useState('');

  const handleAddCode = () => {
    setCouponCodes([...couponCodes, newCode]);
    setNewCode('');
  };

  return (
    <div>
      <h1>Researcher Setup</h1>
      <input
        type="text"
        value={newCode}
        onChange={(e) => setNewCode(e.target.value)}
      />
      <button onClick={handleAddCode}>Add Code</button>
      <ul>
        {couponCodes.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResearcherApp;
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives } from '@api/endpoints';
import { Redeem } from './Redeem';

const CandidateApp = () => {
  const [redeemedCodes, setRedeemedCodes] = useState([]);
  const [currentCode, setCurrentCode] = useState('');

  const handleRedeemCode = () => {
    // Check if the code has already been redeemed
    if (!redeemedCodes.includes(currentCode)) {
      // Mark the code as redeemed
      setRedeemedCodes([...redeemedCodes, currentCode]);
    }
    setCurrentCode('');
  };

  return (
    <div>
      <h1>Candidate Redeem</h1>
      <input
        type="text"
        value={currentCode}
        onChange={(e) => setCurrentCode(e.target.value)}
      />
      <button onClick={handleRedeemCode}>Redeem</button>
      {redeemedCodes.includes(currentCode) && <p>Code already redeemed.</p>}
    </div>
  );
};

export default CandidateApp;
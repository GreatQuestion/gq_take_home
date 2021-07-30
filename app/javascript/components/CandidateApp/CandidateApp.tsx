import * as React from 'react';
import { useEffect, useState } from 'react';
import { redeemIncentive } from '@api/endpoints';
import { Redeem } from './Redeem';

export const CandidateApp: React.FC = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Redeem incentive</h1>

      {/* {loading && <span>Loading...</span>} */}

      <Redeem />
    </div>
  );
};

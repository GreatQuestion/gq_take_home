import React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives } from '@api/endpoints';
import { Redeem } from './Redeem';

export const CandidateApp = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getIncentives()
      .then(incentives => {
        setData(incentives);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Redeem incentive</h1>

      {loading && <span>Loading...</span>}

      {!loading && <Redeem data={data} />}
    </div>
  );
};

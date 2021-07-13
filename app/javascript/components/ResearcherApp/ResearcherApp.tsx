import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives } from '@api/endpoints';
import { IncentiveForm } from './IncentiveForm';

export const ResearcherApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState<Incentive[]>(null);
  const [allCodes, setAllCodes] = useState<Incentive[]>(null);

  useEffect(() => {
    getIncentives()
      .then(incentives => {
        setAllCodes(incentives.allCodes);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Setup incentive</h1>
      <p className="mb-4">Enter the coupon codes for the candidate to receive: (You separate multiple codes with commas!)</p>

      { loading && <span>Loading...</span> }
      { !loading && <IncentiveForm allCodes={allCodes} /> }
    </div>
  );
};

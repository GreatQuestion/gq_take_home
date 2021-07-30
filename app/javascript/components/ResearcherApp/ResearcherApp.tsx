import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives } from '@api/endpoints';
import { IncentiveForm } from './IncentiveForm';

export const ResearcherApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Incentive[]>(null);

  useEffect(() => {
    getIncentives()
      .then(incentives => {
        setData(incentives);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Setup incentive</h1>
      <p className="mb-4">Enter the coupon code for the candidate to receive:</p>

      {loading && <span>Loading...</span>}

      {!loading && <IncentiveForm />}
    </div>
  );
};

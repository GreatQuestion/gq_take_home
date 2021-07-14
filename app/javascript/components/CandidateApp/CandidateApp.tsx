import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentive } from '@api/endpoints';
import { Redeem } from './Redeem';

// Candidate app is responsible for the redemptions of the code
export const CandidateApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Incentive[]>(null);

  useEffect(() => {
    const el = document.getElementById('CandidateApp')
    const { id } = el.dataset

    getIncentive(id)
      .then(incentive => {
        setData(incentive);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Redeem Incentive</h1>
      <p>
        In order to receive a candidate redemption code for participating in research,
        &nbsp;you'll need to redeem the incentive!
      </p>

      {loading && <span>Loading...</span>}
      {!loading && <Redeem data={data} />}
    </div>
  );
};

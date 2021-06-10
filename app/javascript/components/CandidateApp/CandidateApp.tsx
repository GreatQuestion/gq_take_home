import * as React from 'react';
import { useEffect, useState } from 'react';
import { getRedeems } from '@api/endpoints';
import { Redeem } from './Redeem';

export const CandidateApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Incentive[]>(null);
  const [usersincentives, setUsersincentives] = useState<Incentive[]>(null);

  useEffect(() => {
    getRedeems()
      .then(redeems => {
        setData(redeems.incentives);
        setUsersincentives(redeems.users_incentives)
      });
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Redeem incentive</h1>
      <Redeem
        data={data}
        usersincentives={usersincentives}
        setData={setData}
        setUsersincentives={setUsersincentives}
      />
    </div>
  );
};

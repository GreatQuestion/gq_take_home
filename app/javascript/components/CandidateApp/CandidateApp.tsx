import * as React from 'react';
import { useEffect, useState } from 'react';
import { getIncentives, updateIncentive } from '@api/endpoints';

export const CandidateApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Incentive[]>(null);
  const [redeemed, setRedeemed] = useState(false);

  useEffect(() => {
    getIncentives()
      .then(incentives => {
        setData(incentives);
        setLoading(false);
      });
  }, []);

  async function handleClickRedeem() {
    setRedeemed(true);
  }

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Redeem incentive</h1>

      <div className="py-4">
        {loading && <span>Loading...</span>}
        {!loading && (
          <div>
            <div className="pb-6">
              <button
                disabled={loading || redeemed}
                className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
                onClick={handleClickRedeem}
              >
                Redeem
              </button>
            </div>

            {redeemed && (
              <div className="py-4 text-green-600 italic">
                Your code is: {data[0].code}. Thanks for participating in our research!
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

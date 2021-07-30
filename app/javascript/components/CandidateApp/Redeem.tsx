import * as React from 'react';
import { useState } from 'react';
import { redeemIncentive } from '@api/endpoints';

export const Redeem: React.FC<Props> = () => {
  const [redeemed, setRedeemed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Incentive>(null);
  const [error, setError] = useState("")


  async function handleClickRedeem() {
    setLoading(true);
    redeemIncentive()
      .then(incentive => {
        if (incentive === null) {
          throw new Error("null")
        }
        setData(incentive);
        setRedeemed(true);
        setLoading(false);
      }).catch((err) => {
        setError("Something went wrong")
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="pb-4">
        <button
          disabled={redeemed || loading}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleClickRedeem}
        >
          Redeem
        </button>
      </div>

      {error && (
        <div className="py-4 text-red-600 italic">
          {error}
        </div>
      )}

      {redeemed && (
        <div className="py-4 text-green-600 italic">
          Your code is: {data.code}. Thanks for participating in our research!
        </div>
      )}
    </div>
  );
};

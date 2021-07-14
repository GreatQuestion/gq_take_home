import * as React from 'react';
import { useState, useCallback } from 'react';
import { createRedemption } from '@api/endpoints';

interface Props {
  data: Incentive[];
}
export const Redeem: React.FC<Props> = ({ data }) => {
  const [redeemed, setRedeemed] = useState(false);
  const [message, setMessage] = useState('');
  const [redemption, setRedemption] = useState(null);
  const [candidateIncentiveValue, setCandidateIncentiveValue] = useState(null);

  const { incentive } = data;
  const { code, id } = incentive;

  async function handleClickRedeem() {
    setRedeemed(false);
    const redemption = await createRedemption(id, code);

    if (redemption) {
      const { candidateIncentive } = redemption;
      setMessage('Successfully redeemed!');
      setRedemption(candidateIncentive);
      setTimeout(() => setMessage(''), 1500);
      setRedeemed(true);
    } else {
      setMessage('An error occured');
    }
  }

  return (
    <div>
      <div className="pb-4">
        <button
          disabled={redeemed}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleClickRedeem}
        >
          Redeem
        </button>
      </div>

      {redeemed && (
        <div className="py-4 text-green-600 italic">
          Your code is: {redemption.code}. Thanks for participating in our research!
        </div>
      )}
    </div>
  );
};

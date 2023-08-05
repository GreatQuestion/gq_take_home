import React from 'react';
import { useState } from 'react';

// interface Props {
//   data: Incentive[];
// }
export const Redeem = ({ data }) => {
  const [redeemed, setRedeemed] = useState(true);
  const [buttonColor, setButtonColor] = useState('blue')
  const [cursor, setCursor] = useState('pointer')

  async function handleClickRedeem() {
    setRedeemed(false);
    setButtonColor('gray')
    setCursor('not-allowed');
  }

  return (
    <div>
      <div className="pb-4">
        <button
          disabled={!redeemed}
          style={{ backgroundColor: buttonColor, cursor: cursor }}
          className="rounded-md px-4 py-2, color: text-white"
          onClick={handleClickRedeem}
        >
          Redeem
        </button>
      </div>

      {!redeemed && (
        <div className="py-4 text-green-600 italic">
          Your code is: {data[0].code}. Thanks for participating in our research!
        </div>
      )}
    </div>
  );
};

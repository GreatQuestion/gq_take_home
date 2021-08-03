import * as React from "react";
import { useState } from "react";

interface Props {
  data: Incentive[];
}
export const Redeem: React.FC<Props> = ({ data }) => {
  const [redeemed, setRedeemed] = useState(false);

  async function handleClickRedeem() {
    setRedeemed(true);
  }

  const code = data[0]?.code;

  if (code === undefined)
    throw new Error("code undefined - data array is empty");

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
          Your code is: {code}. Thanks for participating in our research!
        </div>
      )}
    </div>
  );
};

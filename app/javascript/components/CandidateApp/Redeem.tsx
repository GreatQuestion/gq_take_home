import { useIncentive } from "../../hooks";
import React from "react";

export const Redeem = ({
  incentive,
}: {
  incentive: Incentive;
}): JSX.Element => {
  const [state, { redeem }] = useIncentive(incentive);

  return (
    <div>
      <div className="pb-4">
        <button
          disabled={state.incentive.redeemed}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={redeem}
        >
          Redeem
        </button>
      </div>

      {state.incentive.redeemed && (
        <div className="py-4 ">
          <span className="text-green-600 italic">
            Your codes are listed below. Thanks for participating in our
            research!
          </span>
          <div>
            {state.incentive.codes.map((code) => (
              <span key={code}>{code}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

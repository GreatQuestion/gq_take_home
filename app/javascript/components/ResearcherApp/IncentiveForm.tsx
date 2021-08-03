import React from "react";
import { useIncentive } from "../../hooks";

export const IncentiveForm = ({ incentive }: { incentive: Incentive }) => {
  const [state, { save, addCode, handleInputChange }] = useIncentive(incentive);

  return (
    <div>
      {state.incentive.codes.map((code, index) => (
        <div className="space-x-2 pb-4" key={index}>
          <input
            disabled={state.status === "saving"}
            className="text-xl border"
            type="text"
            name="incentive_code"
            value={code}
            onChange={handleInputChange(index)}
          />
        </div>
      ))}
      <div className="flex space-x-2 pb-4">
        <button
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={addCode}
        >
          Add code
        </button>
        <button
          disabled={state.status === "saving"}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={save}
        >
          Save
        </button>
      </div>
      {"message" in state && (
        <div className="text-gray-600 italic">{state.message}</div>
      )}
    </div>
  );
};

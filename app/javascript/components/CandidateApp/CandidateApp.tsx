import React from "react";
import { Redeem } from "./Redeem";
import { useIncentives } from "../../hooks";

export const CandidateApp: React.FC = () => {
  const state = useIncentives();

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Redeem incentive</h1>

      {state.status === "loading" ? <span>{"Loading..."}</span> : null}
      {state.status === "error" ? <span>{"An error occurred"}</span> : null}
      {state.status === "loaded" ? <Redeem data={state.incentives} /> : null}
    </div>
  );
};

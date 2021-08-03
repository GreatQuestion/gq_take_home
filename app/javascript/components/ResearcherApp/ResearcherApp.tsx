import React from "react";
import { IncentiveForm } from "./IncentiveForm";
import { useIncentives } from "../../hooks";

export const ResearcherApp = (): JSX.Element => {
  const state = useIncentives();

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Setup incentive</h1>
      <p className="mb-4">
        Enter the coupon code for the candidate to receive:
      </p>

      {state.status === "loading" ? <span>{"Loading..."}</span> : null}
      {state.status === "error" ? <span>{"An error occurred"}</span> : null}

      {state.status === "loaded"
        ? state.incentives.map((incentive) => (
            <IncentiveForm key={incentive.id} {...{ incentive }} />
          ))
        : null}
    </div>
  );
};

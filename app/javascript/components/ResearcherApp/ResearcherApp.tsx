import React, { useEffect, useReducer } from "react";
import { getIncentives } from "@api/endpoints";
import { IncentiveForm } from "./IncentiveForm";

type State =
  | { status: "loaded"; incentives: Incentive[]; error: undefined }
  | { status: "loading"; incentives: undefined; error: undefined }
  | { status: "error"; incentives: undefined; error: Error };

type Action =
  | { type: "loaded"; payload: Incentive[] }
  | { type: "error"; payload: Error };

const initial: State = {
  status: "loading",
  incentives: undefined,
  error: undefined,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "loaded":
      return { status: "loaded", incentives: action.payload, error: undefined };
    case "error":
      return { status: "error", incentives: undefined, error: action.payload };
  }
};

export const ResearcherApp = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    getIncentives()
      .then((incentives) => dispatch({ type: "loaded", payload: incentives }))
      .catch((error) => dispatch({ type: "error", payload: error }));
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Setup incentive</h1>
      <p className="mb-4">
        Enter the coupon code for the candidate to receive:
      </p>

      {state.status === "loading" ? <span>{"Loading..."}</span> : null}
      {state.status === "loaded" ? (
        <IncentiveForm data={state.incentives} />
      ) : null}
      {state.status === "error" ? <span>{"An error occurred"}</span> : null}
    </div>
  );
};

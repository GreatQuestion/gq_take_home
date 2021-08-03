import { getIncentives } from "@api/endpoints";
import { useEffect, useReducer } from "react";

type State =
  | { status: "loaded"; incentives: Incentive[] }
  | { status: "loading" }
  | { status: "error"; error: Error };

type Action =
  | { type: "loaded"; payload: Incentive[] }
  | { type: "error"; payload: Error };

const initial: State = { status: "loading" };

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case "loaded":
      return { status: "loaded", incentives: action.payload };
    case "error":
      return { status: "error", error: action.payload };
  }
};

export const useIncentives = (): State => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    getIncentives()
      .then((incentives) => dispatch({ type: "loaded", payload: incentives }))
      .catch((error) => dispatch({ type: "error", payload: error }));
  }, []);

  return state;
};

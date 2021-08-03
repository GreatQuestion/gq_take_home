import { ChangeEventHandler, useReducer } from "react";
import { updateIncentive } from "@api/endpoints";

type State = { incentive: Incentive } & (
  | { status: "saved"; message: "Successfully updated!" }
  | { status: "saving" }
  | { status: "error"; error: Error; message: "An error occurred" }
  | { status: "waiting" }
  | { status: "changing" }
);

type Action =
  | { type: "saved"; payload: Incentive }
  | { type: "saving" }
  | { type: "error"; payload: Error }
  | {
      type: "change";
      payload: { index: number; code: Incentive["codes"][number] };
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "error":
      return {
        status: "error",
        error: action.payload,
        incentive: state.incentive,
        message: "An error occurred",
      };
    case "saved":
      return {
        status: "saved",
        incentive: action.payload,
        message: "Successfully updated!",
      };
    case "saving":
      return { status: "saving", incentive: state.incentive };
    case "change":
      return {
        status: "changing",
        incentive: {
          ...state.incentive,
          codes: [
            ...state.incentive.codes.slice(0, action.payload.index),
            action.payload.code,
            ...state.incentive.codes.slice(action.payload.index + 1),
          ],
        },
      };
  }
};

export const useIncentive = (
  incentive: Incentive
): [
  State,
  {
    save: () => Promise<void>;
    addCode: () => void;
    handleInputChange: (index: number) => ChangeEventHandler<HTMLInputElement>;
  }
] => {
  const [state, dispatch] = useReducer(reducer, {
    incentive,
    status: "waiting",
  });

  const save = async () => {
    dispatch({ type: "saving" });

    try {
      const payload = await updateIncentive(state.incentive);

      dispatch({ type: "saved", payload });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };

  const addCode = () => {
    dispatch({
      type: "change",
      payload: { index: state.incentive.codes.length, code: "" },
    });
  };

  const handleInputChange =
    (index: number): ChangeEventHandler<HTMLInputElement> =>
    (e) =>
      dispatch({
        type: "change",
        payload: { index, code: e.currentTarget.value },
      });

  return [state, { save, addCode, handleInputChange }];
};

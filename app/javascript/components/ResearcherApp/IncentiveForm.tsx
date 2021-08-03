import React, { useCallback, useReducer, useState } from "react";
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
  | { type: "change"; payload: Incentive["code"] };

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
        incentive: { ...state.incentive, code: action.payload },
      };
  }
};

export const IncentiveForm = ({ incentive }: { incentive: Incentive }) => {
  const [state, dispatch] = useReducer(reducer, {
    incentive,
    status: "waiting",
  });

  const handleSave = useCallback(async () => {
    dispatch({ type: "saving" });

    try {
      const payload = await updateIncentive(state.incentive);
      dispatch({ type: "saved", payload });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  }, []);

  return (
    <div>
      <div className="flex space-x-2 pb-4">
        <input
          disabled={state.status === "saving"}
          className="text-xl border"
          type="text"
          name="incentive_code"
          value={state.incentive.code}
          onChange={(e) =>
            dispatch({ type: "change", payload: e.currentTarget.value })
          }
        />
        <button
          disabled={state.status === "saving"}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleSave}
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

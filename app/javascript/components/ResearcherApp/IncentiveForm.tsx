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

export const IncentiveForm = ({ incentive }: { incentive: Incentive }) => {
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
            onChange={(e) =>
              dispatch({
                type: "change",
                payload: { index, code: e.currentTarget.value },
              })
            }
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

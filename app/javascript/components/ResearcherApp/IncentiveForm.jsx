import * as React from "react";
import { useState } from "react";
import { AddIncentive } from "@api/endpoints";

export const IncentiveForm = ({ data }) => {
  const [message, setMessage] = useState("");
  const [couponCodes, setCouponCodes] = useState([]);
  const [newCode, setNewCode] = useState("");
  const [inputValue, setInputValue] = useState(data[0].code);

  const handleClickSave = () => {
    const incentive = AddIncentive(newCode, setCouponCodes, setNewCode);
    if (incentive) {
      setMessage("Successfully updated!");
      setTimeout(() => setMessage(""), 2000);
    } else {
      setMessage("An error occured");
    }
  }

  return (
    <div>
      <div className="flex space-x-2 pb-4">
        <input
          className="text-xl border"
          type="text"
          name="incentive_code"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
        />
        <button
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleClickSave}
        >
         save
        </button>
      </div>
      {message && <div className="text-gray-600 italic">{message}</div>}
      <h1 className="text-2xl font-bold mb-6">Coupon Setup</h1>
      <ul>
        {couponCodes.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
      
    </div>
  );
};

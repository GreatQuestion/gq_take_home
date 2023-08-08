import * as React from "react";
import { useState } from "react";
import { updateIncentive } from "@api/endpoints";
import axios from "axios";

// interface Props {
//   data: Incentive[];
// }
export const IncentiveForm = ({ data }) => {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [couponCodes, setCouponCodes] = useState([]);
  const [newCode, setNewCode] = useState("");
  const [inputValue, setInputValue] = useState(data[0].code);

  async function handleClickSave() {
    setSaving(true);
    const incentive = await updateIncentive(data[0].id, { code: inputValue });
    if (incentive) {
      setMessage("Successfully updated!");
      setTimeout(() => setMessage(""), 2000);
    } else {
      setMessage("An error occured");
    }
    setSaving(false);
  }

  // Send POST request to add a new coupon code when newCode changes
  // const baseUrl = `${window.location.origin}/api/incentives`;
  const handleAddCode = async () => {
    try {
      // Send POST request to add a new coupon code
      const response = await axios.post(
        'http://127.0.0.1:3000/api/incentives', {
        code: newCode }
      )

      if (response.status === 201) {
        // Update coupon codes after successful addition
        setCouponCodes([...couponCodes, newCode]);
        setNewCode("");
      } else {
        console.error("Failed to add coupon code");
      }
    } catch (error) {
      console.error("Error adding coupon code:", error);
    }
  };

  return (
    <div>
      <div className="flex space-x-2 pb-4">
        <input
          disabled={saving}
          className="text-xl border"
          type="text"
          name="incentive_code"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <button
          disabled={saving}
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleClickSave}
        >
          Edit
        </button>
        <input
          className="text-xl border"
          placeholder="Enter new code"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
        />
        <button
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
          onClick={handleAddCode}
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

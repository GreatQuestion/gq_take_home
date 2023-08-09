import axios from "axios";
export const getIncentives = async () => {
  const resp = await fetch("/api/incentives");
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const AddIncentive = async (newCode, setCouponCodes, setNewCode) => {
  try {
    const resp = await axios.post("/api/incentives", {
      code: newCode,
    });
    if (resp.status === 201) {
      setCouponCodes((prevCouponCodes) => [...prevCouponCodes, newCode]);
      setNewCode("");
    } else {
      console.error("Failed to add coupon code");
    }
  } catch(error) {
    console.log("Error adding coupon code:", error)
  }
};

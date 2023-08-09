import axios from "axios";
const baseUrl = `${window.location.origin}/api/incentives`;

export const getIncentives = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
  return []; // Return an empty array or handle error case appropriately

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

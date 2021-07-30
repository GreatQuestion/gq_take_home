
export const getIncentives = async (): Promise<Incentive[]> => {
  const resp = await fetch('/api/incentives');
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const redeemIncentive = async (): Promise<Incentive> => {
  const resp = await fetch('/api/incentives/redeem');
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};



export const createIncentive = async (params: Partial<Incentive>): Promise<Incentive> => {
  const resp = await fetch(`/api/incentives`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

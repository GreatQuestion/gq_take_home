
export const getIncentives = async (): Promise<Incentive[]> => {
  const resp = await fetch('/incentives');
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const updateIncentive = async (id: number, params: Partial<Incentive>): Promise<Incentive> => {
  const resp = await fetch(`/incentives/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const getIncentives = async (): Promise<Incentive[]> => {
  const resp = await fetch('/api/incentives');
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const getIncentive = async (id: number): Promise<Incentive[]> => {
  const resp = await fetch(`/api/incentives/${id}`);
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const createIncentives = async (params: Partial<Incentive>): Promise<Incentive> => {
  const resp = await fetch('/api/incentives', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const updateIncentive = async (id: number, params: Partial<Incentive>): Promise<Incentive> => {
  const resp = await fetch(`/api/incentives/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const createRedemption = async (id: number): Promise<CandidateIncentive> => {
  const resp = await fetch(`/api/incentive/${}/redemptions/${id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
}

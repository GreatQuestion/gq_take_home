export const getRedeems = async (): Promise<Incentive[]> => {
  const resp = await fetch('/api/redeems');
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const updateRedeems = async (params: Partial<Incentive>): Promise<Incentive> => {
  const resp = await fetch(`/api/redeems`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const getIncentives = async (): Promise<Incentive[]> => {
  const resp = await fetch('/api/incentives');
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

export const login = async (params: Partial<Incentive>): Promise<Incentive> => {
  const resp = await fetch(`/api/users/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

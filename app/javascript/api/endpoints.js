
export const getIncentives = async () => {
  const resp = await fetch('/api/incentives');
  if (resp.ok) {
    return await resp.json();
  }
  return null;
};

export const updateIncentive = async (id, params) => {
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

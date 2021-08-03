export const getIncentives = async (): Promise<Incentive[] | undefined> => {
  const resp = await fetch("/api/incentives");
  if (resp.ok) {
    return await resp.json();
  }
  return;
};

export const updateIncentive = async (
  id: number,
  params: Partial<Incentive>
): Promise<Incentive | undefined> => {
  const resp = await fetch(`/api/incentives/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (resp.ok) {
    return await resp.json();
  }
  return;
};

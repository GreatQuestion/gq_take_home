export const getIncentives = async (): Promise<Incentive[]> => {
  const resp = await fetch("/api/incentives");
  if (resp.ok) return resp.json();
  throw new Error("api error: getIncentives");
};

export const updateIncentive = async (
  incentive: Partial<Incentive> & Pick<Incentive, "id">
): Promise<Incentive> => {
  const { id, ...params } = incentive;
  const resp = await fetch(`/api/incentives/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (resp.ok) return resp.json();
  throw new Error("api error: updateIncentive");
};

const convertIncentive =
  (codes?: string[]) =>
  ({
    code,
    ...old
  }: Omit<Incentive, "codes"> & { code: string }): Incentive => ({
    ...old,
    codes: codes ?? [code],
  });

export const getIncentives = async (): Promise<Incentive[]> => {
  const resp = await fetch("/api/incentives");
  if (resp.ok)
    // TODO: fix api+db to handle multiple codes
    return (await resp.json()).map(convertIncentive());
  throw new Error("api error: getIncentives");
};

export const updateIncentive = async (
  incentive: Partial<Incentive> & Pick<Incentive, "id">
): Promise<Incentive> => {
  const { id, codes, ...params } = incentive;

  // TODO: fix api+db to handle multiple codes
  const code = codes?.[0];
  const resp = await fetch(`/api/incentives/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...params, code }),
  });

  if (resp.ok)
    // TODO: fix api+db to handle multiple codes
    return convertIncentive(incentive.codes)(await resp.json());
  throw new Error("api error: updateIncentive");
};

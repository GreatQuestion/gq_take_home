type DbIncentive = Omit<Incentive, "codes" | "redeemed"> & { code: string };

const convertIncentive =
  (codes?: string[]) =>
  ({ code, ...old }: DbIncentive): Incentive => ({
    ...old,
    codes: codes ?? [code],
    redeemed: false,
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
  const { id, codes } = incentive;

  // TODO: fix api+db to handle multiple codes
  const code = codes?.[0];
  const resp = await fetch(`/api/incentives/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  if (resp.ok)
    // TODO: fix api+db to handle multiple codes
    return convertIncentive(incentive.codes)(await resp.json());
  throw new Error("api error: updateIncentive");
};

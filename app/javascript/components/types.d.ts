interface Model {
  id: number;
  created_at: string;
  updated_at: string;
}

interface Incentive extends Model {
  code: string;
  redeemed: boolean;
}

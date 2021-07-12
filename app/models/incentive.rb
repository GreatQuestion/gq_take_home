class Incentive < ApplicationRecord
  scope :redeemed_incentives, -> { where(redeemed: true) }

  validates :redeemed,
    inclusion: { in: [true, false] },
    presence: true
end

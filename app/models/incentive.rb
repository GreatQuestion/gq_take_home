class Incentive < ApplicationRecord
  scope :redeemed, -> { where(redeemed: true) }


end

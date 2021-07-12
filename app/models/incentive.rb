# Incentive is the coupon set by the researcher (person who is creating the campaign or whatever resoruce)
class Incentive < ApplicationRecord
  has_many :candidate_incentives, dependent: :destroy
end

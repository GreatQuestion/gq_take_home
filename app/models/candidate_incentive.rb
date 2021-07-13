# Candidate incentive is the actual redemption coupon displayed to the end user for redemption
# This allows for a code to be set per user and redeemed without the initial code being shared between users
class CandidateIncentive < ApplicationRecord
  belongs_to :incentive
  before_save :set_code, if: -> { code.nil? }

  scope :redeemed_incentives, -> { where(redeemed: true) }

  validates :redeemed, inclusion: { in: [true, false] }

  def set_code
    return if code.present?

    self[:code] = SecureRandom.hex(8)
  end
end

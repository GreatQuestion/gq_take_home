# frozen_string_literal: true

#:nodoc:
class Incentive < ApplicationRecord
  belongs_to :user
  has_many :users_incentives, dependent: :destroy

  validates :code, presence: true
  validates :code, uniqueness: { scope: :user_id }
end

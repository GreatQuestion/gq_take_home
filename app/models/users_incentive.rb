# frozen_string_literal: true

#:nodoc:
class UsersIncentive < ApplicationRecord
  belongs_to :user
  belongs_to :incentive, counter_cache: true

  validates :user_id, uniqueness: { scope: :incentive_id }

  attr_accessor :code

  def code
    incentive.code
  end

  def as_json
    {
      code: code,
      user_id: user_id,
      incentive_id: incentive_id
    }
  end
end
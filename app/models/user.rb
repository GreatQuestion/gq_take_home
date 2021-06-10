# frozen_string_literal: true

#:nodoc:
class User < ApplicationRecord
  has_many :users_incentives, dependent: :destroy
  has_many :incentives, dependent: :destroy

  validates :name, uniqueness: { scope: :role }

  enum role: %i[candidate researcher]
end

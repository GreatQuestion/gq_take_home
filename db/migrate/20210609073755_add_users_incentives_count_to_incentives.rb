# frozen_string_literal: true

#:nodoc:
class AddUsersIncentivesCountToIncentives < ActiveRecord::Migration[6.0]
  def change
    add_column :incentives, :users_incentives_count, :integer
  end
end

# frozen_string_literal: true

#:nodoc:
class CreateUsersIncentives < ActiveRecord::Migration[6.0]
  def change
    create_table :users_incentives do |t|
      t.references :user, null: false, foreign_key: true
      t.references :incentive, null: false, foreign_key: true

      t.timestamps
    end
  end
end

# frozen_string_literal: true

#:nodoc:
class AddUserToIncentives < ActiveRecord::Migration[6.0]
  def change
    add_reference :incentives, :user, null: false, foreign_key: true
  end
end

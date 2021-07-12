class AddRedeemedBooleanToIncentives < ActiveRecord::Migration[6.0]
  def change
    add_column :incentives, :redeemed, :boolean, default: false, null: false
  end
end

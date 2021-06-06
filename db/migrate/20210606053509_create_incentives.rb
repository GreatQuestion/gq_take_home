class CreateIncentives < ActiveRecord::Migration[6.0]
  def change
    create_table :incentives do |t|
      t.string :code

      t.timestamps
    end
  end
end

class CreateCandidateIncentives < ActiveRecord::Migration[6.0]
  def change
    create_table :candidate_incentives do |t|
      t.belongs_to :incentive, null: false, foreign_key: true
      t.string :code
      t.boolean :redeemed, default: false, null: false

      t.timestamps
    end
  end
end

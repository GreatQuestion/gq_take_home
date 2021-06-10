# frozen_string_literal: true

#:nodoc:
class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :role

      t.timestamps
    end
  end
end

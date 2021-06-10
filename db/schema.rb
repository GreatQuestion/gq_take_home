# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_09_074237) do

  create_table "incentives", force: :cascade do |t|
    t.string "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "users_incentives_count"
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_incentives_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users_incentives", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "incentive_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["incentive_id"], name: "index_users_incentives_on_incentive_id"
    t.index ["user_id"], name: "index_users_incentives_on_user_id"
  end

  add_foreign_key "incentives", "users"
  add_foreign_key "users_incentives", "incentives"
  add_foreign_key "users_incentives", "users"
end

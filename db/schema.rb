# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_16_154906) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.bigint "planet_id"
    t.bigint "flight_id"
    t.index ["flight_id"], name: "index_destinations_on_flight_id"
    t.index ["planet_id"], name: "index_destinations_on_planet_id"
  end

  create_table "flights", force: :cascade do |t|
    t.string "name"
    t.date "departure_date"
    t.date "arrival_date"
    t.bigint "mission_id"
    t.float "delta_v"
    t.float "angular_separation"
    t.date "launch_date"
    t.float "time_of_flight"
    t.float "distance"
    t.index ["mission_id"], name: "index_flights_on_mission_id"
  end

  create_table "missions", force: :cascade do |t|
    t.string "name"
    t.float "total_delta_v", default: 0.0
    t.integer "total_mission_duration", default: 0
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_missions_on_user_id"
  end

  create_table "origins", force: :cascade do |t|
    t.bigint "planet_id"
    t.bigint "flight_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flight_id"], name: "index_origins_on_flight_id"
    t.index ["planet_id"], name: "index_origins_on_planet_id"
  end

  create_table "planets", force: :cascade do |t|
    t.string "name"
    t.boolean "outer_planet_correction"
    t.float "mean_longitude"
    t.float "mean_longitude_correction"
    t.float "semimajor_axis"
    t.float "semimajor_axis_correction"
    t.float "eccentricity"
    t.float "eccentricity_correction"
    t.float "inclination"
    t.float "inclination_correction"
    t.float "longitude_of_perihelion"
    t.float "longitude_of_perihelion_correction"
    t.float "ascending_node_longitude"
    t.float "ascending_node_longitude_correction"
    t.float "b_outer_correction"
    t.float "c_outer_correction"
    t.float "s_outer_correction"
    t.float "f_outer_correction"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

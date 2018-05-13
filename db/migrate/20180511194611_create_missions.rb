class CreateMissions < ActiveRecord::Migration[5.2]
  def change
    create_table :missions do |t|
      t.string :name
      t.float :total_delta_v
      t.integer :total_mission_duration
      t.belongs_to :user

      t.timestamps
    end
  end
end

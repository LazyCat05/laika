class SetMissionDefaults < ActiveRecord::Migration[5.2]
  def up
    change_column_default :missions, :total_delta_v, 0
    change_column_default :missions, :total_mission_duration, 0
  end
  def down
    change_column_default :missions, :total_delta_v, nil
    change_column_default :missions, :total_mission_duration, nil
  end
end

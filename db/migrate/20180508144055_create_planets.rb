class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.boolean :outer_planet_correction
      t.float :mean_longitude
      t.float :mean_longitude_correction
      t.float :semimajor_axis
      t.float :semimajor_axis_correction
      t.float :eccentricity
      t.float :eccentricity_correction
      t.float :inclination
      t.float :inclination_correction
      t.float :longitude_of_perihelion
      t.float :longitude_of_perihelion_correction
      t.float :ascending_node_longitude
      t.float :ascending_node_longitude_correction
      t.float :b_outer_correction
      t.float :c_outer_correction
      t.float :s_outer_correction
      t.float :f_outer_correction

      t.timestamps
    end
  end
end

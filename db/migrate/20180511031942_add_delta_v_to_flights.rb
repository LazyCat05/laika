class AddDeltaVToFlights < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :delta_v, :float
    add_column :flights, :angular_separation, :float
  end
end

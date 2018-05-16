class FixDistanceOnFlightsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :flights, :distance, :string
    add_column :flights, :distance, :float
  end
end

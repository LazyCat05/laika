class AddTimeOfFlightToFlights < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :time_of_flight, :float
  end
end

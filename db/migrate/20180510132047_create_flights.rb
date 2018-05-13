class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :name
      t.string :distance
      t.date :departure_date
      t.date :arrival_date
      t.belongs_to :mission
    end
  end
end

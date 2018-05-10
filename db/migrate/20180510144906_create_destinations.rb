class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.belongs_to :planet
      t.belongs_to :flight
    end
  end
end

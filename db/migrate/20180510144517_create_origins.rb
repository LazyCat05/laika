class CreateOrigins < ActiveRecord::Migration[5.2]
  def change
    create_table :origins do |t|
      t.belongs_to :planet
      t.belongs_to :flight

      t.timestamps
    end
  end
end

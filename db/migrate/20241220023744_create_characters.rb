class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.references :map, null: false, foreign_key: true
      t.string :name, null: false
      t.string :coordinates, null: false

      t.timestamps
    end
  end
end

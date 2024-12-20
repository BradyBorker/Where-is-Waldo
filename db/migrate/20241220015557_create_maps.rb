class CreateMaps < ActiveRecord::Migration[7.0]
  def change
    create_table :maps do |t|
      t.string :title, null: false

      t.timestamps
    end
  end
end

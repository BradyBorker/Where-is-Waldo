class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.references :map, null: false, foreign_key: true
      t.string :name, null: false
      t.float :time, null: false

      t.timestamps
    end
  end
end

class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :meal_id
      t.integer :drink_id

      t.timestamps
    end
  end
end

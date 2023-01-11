class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :ItemOrder_id
      t.integer :user_id
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :itemorder, null: false, foreign_key: true

      t.timestamps
    end
  end
end

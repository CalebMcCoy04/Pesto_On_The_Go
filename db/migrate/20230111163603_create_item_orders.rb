class CreateItemOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :item_orders do |t|
      t.integer :item_id
      

      t.timestamps
    end
  end
end

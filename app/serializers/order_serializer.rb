class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id 
  has_one :user
  has_many :item_orders
  has_many :items, through: :item_orders
end

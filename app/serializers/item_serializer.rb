class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price
  has_many :item_orders
end

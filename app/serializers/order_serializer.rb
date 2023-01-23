class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total
  has_one :user
  has_many :item_orders
  has_many :items, through: :item_orders

  def total
    self.object.total
  end
end

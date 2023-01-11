class OrderSerializer < ActiveModel::Serializer
  attributes :id, :ItemOrder_id, :user_id
  has_one :user
  has_one :itemorder
end

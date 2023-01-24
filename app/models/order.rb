class Order < ApplicationRecord
  belongs_to :user
  has_many :item_orders, dependent: :destroy
  has_many :items, through: :item_orders, source: :item
  validates :user_id, presence: true, numericality: { only_integer: true }

  def total
    items.sum(&:price)
  end
end

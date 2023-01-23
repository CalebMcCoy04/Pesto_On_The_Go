class ItemOrder < ApplicationRecord
  belongs_to :item
  belongs_to :order
  has_many :items
end

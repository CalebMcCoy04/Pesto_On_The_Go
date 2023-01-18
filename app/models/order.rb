class Order < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true, numericality: { only_integer: true }
end

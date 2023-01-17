class Order < ApplicationRecord
  belongs_to :user, foreign_key: 'user_id'

  validates_associated :user
end

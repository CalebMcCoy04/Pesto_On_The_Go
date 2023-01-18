class User < ApplicationRecord
    has_many :orders
    has_many :item_orders, through: :orders

    has_secure_password
    validates :email, :username, :password, presence: true
end

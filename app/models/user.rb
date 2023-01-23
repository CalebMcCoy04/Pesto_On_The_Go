class User < ApplicationRecord
    has_many :orders
    

    has_secure_password
    validates :email, :username, :password, presence: true, on: :create
end

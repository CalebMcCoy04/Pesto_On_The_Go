class User < ApplicationRecord
    has_many :orders
    

    has_secure_password
    validates :email, :username, :password, presence: true, on: :create
#    validates :password, format: password_requirements
#     password_requirements = /\A
#     (?=.{8,}) # at least 8 characters long
#     (?=.*\d) # Contain at least one number
#     (?=.*[a-z]) # Contain at least one lowercase letter
#     (?=.*[A-Z]) # Contains at least one uppercase letter
#     (?=.*[[:^alnum:]]) # Contains at least one symbol
#     /x
end

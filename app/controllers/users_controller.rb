class UsersController < ApplicationController
    def index 
        render json: User.all
    end
    
    def show
        # Find the user using the cookie value
        user = User.find(cookies[:user_id])
        render json: user, status: :ok
      end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 
    
    private 

    def user_params
        params.permit(:username, :email, :password)
    end 
end

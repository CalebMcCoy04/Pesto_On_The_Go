class UsersController < ApplicationController
    def index 
        render json: User.all
    end
    
    def show
       
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
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

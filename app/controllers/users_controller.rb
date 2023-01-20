class UsersController < ApplicationController
    skip_before_action :authorized_user, only: :create
    
   
    def show
        render json: @user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 
    
    def update
        if @user.update(params[:username])
            render json: @user, status: :ok
        else 
            render json: @user.error, status: :unprocessable_entity
        end
    end     
    private 

    def user_params
        params.permit(:username, :email, :password)
    end 

end

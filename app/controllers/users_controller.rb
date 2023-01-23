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
        user = User.find_by_id(params[:id])
        if user
            if user.update!(update_params)
                render json: user, status: :accepted
            else 
                render json: user.errors, status: :unprocessable_entity
            end
        else
            render json: {error: "user not found"}
        end
    end
    
    private 
    def update_params
        params.permit(:email)
    end
    def user_params
        params.permit(:username, :email, :password)
    end 

end

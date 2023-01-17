class OrdersController < ApplicationController
    skip_before_action :authorized_user, only: :index
    def index
        render json: Order.all
    end
    
    def create 
        new_order = Order.create!(user_id: params[:user_id])
        if new_order.valid?
            render json: new_order
        else
            render json: {"errors": new_order.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        if authorized_user(:can_delete_order)
            found_order = Order.find_by(id: params[:id])
            if found_order 
                found_order.destroy
                head :no_content
            else 
                render json: {"errors": "Order not found"}, status: :not_found
            end
        else
            render json: {"errors": "Unauthorized action"}, status: :unauthorized
        end
    end
    


  
end

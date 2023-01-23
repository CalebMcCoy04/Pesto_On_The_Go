class OrdersController < ApplicationController
   skip_before_action :authorized_user, only: :index
    def index
        render json: Order.all
    end

    # def index
    #     orders = Order.left_outer_joins(item_orders: :item).select("orders.*, item_orders.*, items.*")
    #     render json: orders
    # end
    
      
    
    def create 
        new_order = Order.create(user_id: params[:user_id])
        if new_order.valid?
            render json: {order: new_order, order_id: new_order.id}
        else
            render json: {"errors": new_order.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
       
            found_order = Order.find_by(id: params[:id])
            if found_order 
                found_order.destroy
                head :no_content
            else 
                render json: {"errors": "Order not found"}, status: :not_found
            end
        
    end  
end

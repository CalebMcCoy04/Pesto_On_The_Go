class ItemOrdersController < ApplicationController
  
    
    def index
        render json: ItemOrder.all    
    end

    def create
        new_itemorder = ItemOrder.create(new_itemorder_params)
        
        if new_itemorder.valid?
            new_itemorder.save!
            render json: new_itemorder
        else 
            render json: {"errors": new_itemorder.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        
            found_item_order = ItemOrder.find_by(id: params[:id])
            if found_item_order 
                found_item_order.destroy 
                head :no_content
            else 
                render json: {"errors": "Item Order not found"}, status: :not_found
            end
    end  

    private
    def new_itemorder_params
        params.permit(:item_id, :order_id)
    end
end

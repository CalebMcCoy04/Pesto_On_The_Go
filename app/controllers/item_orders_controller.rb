class ItemOrdersController < ApplicationController
  
    
    def index
        render json: ItemOrder.all    
    end

    def create
        new_itemorder = ItemOrder.create(new_itemorder_params)
        new_itemorder.order_id = params[:order_id]
        if new_itemorder.valid?
            new_itemorder.save!
            render json: new_itemorder
        else 
            render json: {"errors": new_itemorder.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def new_itemorder_params
        params.permit(:item_id, :order_id)
    end
end

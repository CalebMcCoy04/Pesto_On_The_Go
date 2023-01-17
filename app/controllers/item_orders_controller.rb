class ItemOrdersController < ApplicationController
    skip_before_action :authorized_user, only: :index
    
    def index
        render json: ItemOrder.all    
    end

    def create 
        new_itemorder = ItemOrder.create(new_itemorder_params)
        if new_itemorder.valid?
            render json: new_itemorder
        else 
            render json: {"errors": new_itemorder.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
        def new_itemorder_params
            parmas.permit(:item_id, :order_id)
        end

end

class ItemsController < ApplicationController
    
    
    def index 
        render json: Item.all
    end

    def show
        item_found = Item.find_by_id(params[:id])
        if item_found
            render json: item_found
        else 
            render json: {"error": "Item not found"}, status: :not_found
        end
    end

    
end

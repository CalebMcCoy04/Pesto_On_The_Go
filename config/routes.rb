Rails.application.routes.draw do
  
  
  resources :orders
  resources :item_orders
  resources :items
  resources :users
  
  post '/login', to:'sessions#login'
  delete '/logout', to:'sessions#destroy'
  get '/auth', to: 'users#show'
  get 'items', to: 'items#index'
  delete '/delete-orders/:id', to: 'item_orders#destroy'
  post '/item_orders', to: 'item_orders#create'
end

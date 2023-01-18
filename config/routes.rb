Rails.application.routes.draw do
  
  
  resources :orders
  resources :item_orders
  resources :items
  resources :users
  
  post '/login', to:'sessions#login'
  delete '/logout', to:'sessions#destroy'
  get '/auth', to: 'users#show'
  get 'items', to: 'items#index'
  
  post '/item_orders', to: 'item_orders#create'
end

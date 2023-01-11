Rails.application.routes.draw do
  
  resources :orders
  resources :item_orders
  resources :items
  resources :users
  
  post '/login', to:'sessions#create'
  delete '/logout', to:'sessions#destroy'
  get '/authorized', to: 'users#show'
end

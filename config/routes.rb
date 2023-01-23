Rails.application.routes.draw do
  
  
  resources :orders
  resources :item_orders
  resources :items
  resources :users
  
  post '/login', to:'sessions#login'
  delete '/logout', to:'sessions#destroy'
  get '/auth', to: 'users#show'
  
  delete '/delete-orders/:id', to: 'orders#destroy'

  

end

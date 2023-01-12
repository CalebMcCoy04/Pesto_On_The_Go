Rails.application.routes.draw do
  
  
  resources :users
  
  post '/login', to:'sessions#login'
  delete '/logout', to:'sessions#destroy'
  get '/authorized', to: 'users#show'
end

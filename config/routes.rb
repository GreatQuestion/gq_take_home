Rails.application.routes.draw do
  resources :incentives
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get :redeem, to: 'candidates#show'
  get :setup, to: 'researchers#show'
  root to: 'home#index'
end

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :incentives, only: [:index, :update]
    resources :redemptions, only: [:index]
  end

  get :redeem, to: 'candidates#show'
  get :setup, to: 'researchers#show'
  root to: 'home#index'
end

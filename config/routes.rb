Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :incentives, only: [:index, :create] do
      resources :redemptions, only: [:index]
    end
  end

  get :redeem, to: 'redemptions#index'
  get :setup, to: 'setups#index'

  root to: 'home#index'
end

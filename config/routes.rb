Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :incentives, only: [:index, :create] do
      resources :redemptions, only: [:create]
    end
  end

  get '/redeem', to: 'redemptions#index', as: :redeem
  get '/redeem/:code', to: 'redemptions#show', as: :redemption
  get '/setup', to: 'setups#index', as: :setup

  root to: 'home#index'
end

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :incentives, only: [:index, :create, :update]
    resources :redeems, only: [:index, :create]
    namespace :users do
      post 'login', to: 'login#create'
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get :redeem, to: 'candidates#show'
  get :setup, to: 'researchers#show'
  root to: 'home#index'
end

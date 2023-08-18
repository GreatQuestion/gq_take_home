Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :incentives
  end

  get '/redeem', to: 'coupons#redeem'
  post '/redeem', to: 'coupons#redeem_coupon'
  get '/setup', to: 'coupons#setup'
  post '/setup', to: 'coupons#create_coupon'

  root to: 'home#index'
end

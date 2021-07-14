module Api
  class BaseController < ::ActionController::Base
    # skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :null_session

    # Never do this in production
    skip_forgery_protection
  end
end
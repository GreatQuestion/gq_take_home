class BaseController < ::ActionController::Api
  skip_before_action :verify_authenticity_token
end
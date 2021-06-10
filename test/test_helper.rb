ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'minitest/autorun'

class ActiveSupport::TestCase
  extend MiniTest::Spec::DSL
  include FactoryBot::Syntax::Methods
end

module SignInHelper
  def sign_in_as(user)
    post api_users_login_url, params: { name: user.name, role: user.role }
  end
end

class ActionDispatch::IntegrationTest
  include SignInHelper
end

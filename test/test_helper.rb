ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'minitest/autorun'

class ActiveSupport::TestCase
  extend MiniTest::Spec::DSL
  include FactoryBot::Syntax::Methods
end

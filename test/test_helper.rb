ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'minitest/autorun'
require 'minitest/spec'

class ActiveSupport::TestCase
  extend Minitest::Spec::DSL
  include FactoryBot::Syntax::Methods
end

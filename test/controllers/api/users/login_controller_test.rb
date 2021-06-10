require 'test_helper'

class Api::Users::LoginControllerTest < ActionDispatch::IntegrationTest
  describe 'POST #create' do
    subject { post "/api/users/login", params: {incentive: params} }

    let(:params) { {name: 'Candidate', role: 'candidate'} }

    it 'should create user session' do
      subject

      assert_response :success
      assert_equal 1, User.count
    end
  end
end

require 'test_helper'

class Api::RedeemsControllerTest < ActionDispatch::IntegrationTest
  describe 'GET #index' do
    subject { get '/api/redeems' }

    let(:candidate_user) { create(:user, name: 'Candidate', role: 'candidate') }
    let(:researcher_user) { create(:user, name: 'Researcher', role: 'researcher') }

    setup do
      sign_in_as candidate_user
      create(:incentive, code: 'COUPON!', user: researcher_user)
    end

    it 'should return all incentives & User redeems' do
      subject
      assert_response :ok
      data = response.parsed_body
      assert_equal 2, data.size
      assert_equal 1, data['incentives'].size
      assert_equal 0, data['users_incentives'].size
      assert_equal 'COUPON!', data['incentives'][0]['code']
    end
  end

  describe 'POST #create' do
    subject { post "/api/redeems", params: params }

    let(:incentive) { create(:incentive, code: 'FOOBAR') }
    let(:user) { create(:user, name: 'Candidate', role: 'candidate') }
    setup { sign_in_as user }

    let(:params) { {incentive_id: incentive.id} }

    it 'should create the users_incentives' do
      subject

      assert_response :success
      assert_equal 'FOOBAR', incentive.reload.code
    end
  end
end

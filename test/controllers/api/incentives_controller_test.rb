require 'test_helper'

class Api::IncentivesControllerTest < ActionDispatch::IntegrationTest
  describe 'GET #index' do
    subject { get '/api/incentives' }

    let(:user) { create(:user, name: 'Researcher', role: 'researcher') }
    setup do
      sign_in_as user
      create(:incentive, user: user, code: 'COUPON!')
    end

    it 'should return all incentives' do
      subject
      assert_response :ok
      data = response.parsed_body
      assert_equal 1, data.size
      assert_equal 'COUPON!', data[0]['code']
      assert data[0].key? 'id'
    end
  end

  describe 'POST #create' do
    subject { post "/api/incentives", params: params }

    let(:user) { create(:user, name: 'Researcher', role: 'researcher') }
    setup { sign_in_as user }
    let(:params) { {code: 'FOOBAR'} }

    it 'should create the users_incentives' do
      subject

      assert_response :success
      data = response.parsed_body
      assert_equal 'FOOBAR', data['incentive']['code']
    end
  end

  describe 'PUT #update' do
    subject { put "/api/incentives/#{incentive.id}", params: {incentive: params} }

    let(:user) { create(:user, name: 'Researcher', role: 'researcher') }
    setup { sign_in_as user }
    let(:params) { {code: 'FOOBAR'} }
    let(:incentive) { create(:incentive, user: user) }

    it 'should update the incentive' do
      subject

      assert_response :success
      assert_equal 'FOOBAR', incentive.reload.code
    end
  end
end

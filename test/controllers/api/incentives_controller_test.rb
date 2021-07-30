require 'test_helper'

class Api::IncentivesControllerTest < ActionDispatch::IntegrationTest
  describe 'GET #index' do
    subject { get '/api/incentives' }

    setup do
      create(:incentive, code: 'COUPON!')
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
    subject { post "/api/incentives", params: {incentive: params} }

    let(:params) { {code: 'FOOBAR'} }

    it 'should create the incentive' do
      subject
      assert_response :success
      data = response.parsed_body
      assert_equal 'FOOBAR', data['code']
    end
  end

  describe 'Is Unique' do
    subject {get '/api/incentives/redeem'}

    setup do
      create(:incentive, code: 'COUPON1')
    end

    it 'should be unique' do
      subject
      assert_response :success
      data = response.parsed_body
      assert_equal true, data['redeemed']
    end
  end
end

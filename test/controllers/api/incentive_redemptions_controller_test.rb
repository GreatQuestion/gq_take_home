require 'test_helper'

class Api::IncentivesRedemptionsControllerTest < ActionDispatch::IntegrationTest
  describe 'POST #create' do
    let(:incentive) { create(:incentive, codes: ['COUPON_1', 'COUPON_2']) }
    subject { post "/api/incentives/#{incentive.id}/redemptions" }

    # setup do
    #   create(:incentive, code: 'COUPON!')
    # end

    it 'should return an available code' do
      subject
      assert_response :ok
      data = response.parsed_body
      assert_equal 1, data.size
      assert_equal 'COUPON_1', data['code']
      assert_equal 1, incentive.avaiable_codes.size
    end

    describe 'when no coupons available' do
      let(:incentive) { create(:incentive, codes: []) }
      it '422s' do
        subject
        assert_response :unprocessible_entity
      end
    end
  end
end

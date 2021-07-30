require "application_system_test_case"

class CandidateTest < ApplicationSystemTestCase

  describe 'redeeming the incentive' do
    setup do 
      create(:incentive, code: 'COUPON_123', redeemed: true)
      create(:incentive, code: 'COUPON_456', redeemed: false)
    end

    it 'should give the latest coupon' do
      visit '/redeem'
      click_on 'Redeem'
      assert_text 'COUPON_456'
    end
  end
end
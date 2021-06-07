require "application_system_test_case"

class CandidateTest < ApplicationSystemTestCase

  describe 'redeeming the incentive' do
    setup do 
      create(:incentive, code: 'COUPON_123')
    end

    it 'should give the latest coupon' do
      visit '/redeem'
      click_on 'Redeem'
      assert_text 'COUPON_123'
    end
  end
end
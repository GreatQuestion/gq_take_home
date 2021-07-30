require "application_system_test_case"

class ResearcherTest < ApplicationSystemTestCase

  describe 'viewing_incentive' do
    setup do 
      create(:incentive, code: 'COUPON_123')
    end

    it 'should_show_the_current_coupon' do
      visit '/setup'
      assert_text 'COUPON_123' #shows on our list
    end
  end

  describe 'creating_incentive' do

    # setup do
    #   incentive ## create incentive beforehand as let doesnt run until called
    # end
    
    it 'should_update_the_code' do
      visit '/setup'
      fill_in 'incentive_code', with: 'COUPON_123'
      click_on 'Create'
      assert_text 'COUPON_123' # shows on list
    end
  end
end
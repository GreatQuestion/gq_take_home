require 'test_helper'

class IncentiveTest < ActiveSupport::TestCase
  let(:incentive) { create(:incentive, codes: ['COUPON1', 'COUPON2']) }
  # test "the truth" do
  #   assert true
  # end
  describe 'codes' do
    subject { incentive.codes }
    it 'should have multiple coupons' do
      assert_equal 2, subject.size
    end
  end

  describe '#redeem' do 
    subject { incentive.redeem! }
    it 'should create a redemption' do
      assert_difference 'IncentiveRedemption.count' do
        subject
      end
      assert subject.persisted?
      assert subject.is_a? IncentiveRedemption
    end
  end

  describe '#available_codes' do 
    subject { incentive.available_codes }

    setup do 
      create(:incentive_redemption, incentive: incentive, code: 'COUPON1')
    end

    it 'should only return unredeemed' do
      assert_equal 1, subject
    end
  end
end

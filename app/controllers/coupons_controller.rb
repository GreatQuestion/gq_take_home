class CouponsController < ApplicationController
    def redeem
      @redeemed_codes = Coupon.where(redeemed: true).pluck(:code)
      @coupon = Coupon.new
    end
  
    def redeem_coupon  # Rename the action to match the POST route
      @coupon = Coupon.find_by(code: coupon_params[:code])
  
      if @coupon && !@coupon.redeemed
        @coupon.update(redeemed: true)
        redirect_to redeem_path, notice: 'Coupon code redeemed successfully.'
      else
        @redeemed_codes = Coupon.where(redeemed: true).pluck(:code)
        render :redeem
      end
    end
  
    def setup
      @coupons = Coupon.all
      @coupon = Coupon.new
    end
  
    def create_coupon
      @coupon = Coupon.new(coupon_params)
  
      if @coupon.save
        redirect_to setup_path, notice: 'Coupon code added successfully.'
      else
        @coupons = Coupon.all
        render :setup
      end
    end
  
    private
  
    def coupon_params
      params.require(:coupon).permit(:code)
    end
  end
  
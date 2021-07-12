class RedemptionsController < ApplicationController
  # For the candidate, they can visit `/redeem` to redeem a coupon code after the research has been completed. They click
  def index
    render 'index', locals: {}
  end

  private

  def permitted_params
    params.require(:incentive)
  end
end

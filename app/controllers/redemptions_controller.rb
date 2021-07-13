class RedemptionsController < ApplicationController
  # For the candidate, they can visit `/redeem` to redeem a coupon code after the research has been completed. They click
  def index
    render 'index', locals: { incentives: incentives }
  end

  def show
    render 'show', locals: { incentive: incentive }
  end

  private

  # Scope this and fix routes
  def incentives
    @_incentives ||= Incentive.all
  end

  def incentive
    @_incentive ||= incentives.find_by(code: params[:code])
  end
end

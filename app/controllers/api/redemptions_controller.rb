class Api::RedemptionsController < ::Api::BaseController
  def index
    render json: { redeemed: redeemed }, status: :ok
  end

  private

  def redeemed
    Incentive.redeemed
  end
end
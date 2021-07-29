class Api::IncentivesRedemptionsController < ApplicationController

  def create
    @incentive = Incentive.find(params[:id])

    @redemption = @incentive.issue!
    render json: @redemption.to_json
  end

  private

  def update_params
    params.require(:incentive).permit(:code)
  end
end

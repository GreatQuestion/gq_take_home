class Api::IncentivesController < ApplicationController

  def index
    @incentives = Incentive.order(created_at: :desc)
    
    render json: @incentives.to_json
  end

  def redeem
    @incentive = Incentive.find(
      Incentive.where(redeemed: false).pluck(:id).shuffle.first
    )
    @incentive.update(redeemed: true)

    render json: @incentive.to_json
  end

  def create
    @incentive = Incentive.create(create_params)
    render json: @incentive.to_json
  end

  # def update
  #   @incentive = Incentive.find(params[:id])

  #   @incentive.update!(update_params)
  #   render json: @incentive.to_json
  # end

  private

  def create_params
    params.require(:incentive).permit(:code)
  end

  # def update_params
  #   params.require(:incentive).permit(:code)
  # end
end

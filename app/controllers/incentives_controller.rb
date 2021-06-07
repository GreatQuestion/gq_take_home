class IncentivesController < ApplicationController

  def index
    @incentives = Incentive.all
    
    render json: @incentives.to_json
  end

  def update
    @incentive = Incentive.find(params[:id])

    @incentive.update!(update_params)
    render json: @incentive.to_json
  end

  private

  def update_params
    params.require(:incentive).permit(:code)
  end
end

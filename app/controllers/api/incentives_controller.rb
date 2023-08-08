class Api::IncentivesController < ApplicationController

  def index
    @incentives = Incentive.all
    
    render json: @incentives.to_json
  end

  def update
    @incentive = Incentive.find(params[:id])

    @incentive.update!(update_params)
    render json: @incentive.to_json
  end

  def new
    Incentive.new
  end

  def create
    @incentive = Incentive.new(create_params);
    if @incentive.save
      render json: { message: 'Code created successfully!' }, status: :created
    else
      render json: { errors: @incentive.errors.full_messages }, status: :unprocessed_entity
    end
  end

  private

  def create_params
    params.require(:incentive).permit(:code);
  end

  def update_params
    params.require(:incentive).permit(:code);
  end
end

class Api::IncentivesController < ApplicationController
  def index
    render json: {
      incentives: incentives,
      allCodes: ::Secret::CodeService.all_codes,
    }, status: :ok
  end

  def create
    if update_params[:code].present?
      ::Incentive.upsert_all(data, unique_by: :code)

      render json: {
        incentives: incentives,
        allCodes: ::Secret::CodeService.all_codes,
      }, status: :created
    else
      render json: {
        errors: 'Unable to create incentives',
      }, status: :unprocessable_entity
    end
  end

  def update
    Incentive.upsert_all(data)

    render json: incentive
  end

  private

  def update_params
    params.require(:incentive).permit(:code)
  end

  def service
    @_service ||= ::Secret::CodeService.new(codes: update_params[:code])
  end

  def data
    @_data ||= service.perform
  end

  def incentives
    @_incentives ||= Incentive.all
  end

  def incentive
    @_incentive ||= Incentive.find(params[:id])
  end
end

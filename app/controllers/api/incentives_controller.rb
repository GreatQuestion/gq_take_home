class Api::IncentivesController < ApplicationController
  def index
    render json: {
      incentives: incentives,
      allCodes: ::Secret::CodeService.all_codes,
    }, status: :ok
  end

  def create
    if update_params[:code].present?
      data = service.perform

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

  # TODO : See if update works
  def update
    data = service.perform
    incentive.update(data)

    render json: incentive
  end

  private

  def update_params
    params.require(:incentive).permit(:code)
  end

  def service
    @_service ||= ::Secret::CodeService.new(codes: update_params[:code])
  end

  def incentives
    @_incentives ||= Incentive.all
  end

  def incentive
    @_incentive ||= Incentive.find(params[:id])
  end
end

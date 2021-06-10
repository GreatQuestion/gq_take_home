# frozen_string_literal: true

module Api
  #:nodoc:
  class  IncentivesController < ApplicationController
    before_action :authenticate_researcher!

    def index
      @incentives = current_user.incentives

      render json: @incentives.to_json
    end

    def create
      incentive = current_user.incentives.new(code: params[:code])

      if incentive.save
        render json: { incentive: incentive }, status: :ok
      else
        render json: { message: 'Error while creating Incentive', errors: incentive.errors.full_messages }, status: 422
      end
    end

    def update
      @incentive = current_user.incentives.find(params[:id])
      if @incentive.update(update_params)
        render json: @incentive.to_json, status: :ok
      else
        render json: { message: 'Error while updating Incentive', errors: incentive.errors.full_messages }, status: 422
      end
    end

    private

    def update_params
      params.require(:incentive).permit(:code)
    end
  end
end

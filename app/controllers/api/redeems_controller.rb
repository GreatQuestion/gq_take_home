# frozen_string_literal: true

module Api
  #:nodoc:
  class RedeemsController < ApplicationController
    before_action :authenticate_candidate!

    def index
      redeem_incentives = current_user.users_incentives.includes(:incentive)
      @incentives = Incentive.where.not(id: redeem_incentives.pluck(:incentive_id))
      render json: { incentives: @incentives, users_incentives: redeem_incentives.as_json }
    end

    def create
      @users_incentive = UsersIncentive.new(user_id: current_user.id, incentive_id: params[:incentive_id])

      if @users_incentive.save
        render json: { users_incentive:  @users_incentive.as_json }, status: :ok
      else
        render json: { message: 'Error while creating redeems', errors: @users_incentive.errors.full_messages }, status: 422
      end
    end
  end
end

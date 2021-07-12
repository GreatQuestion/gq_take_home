class SetupsController < ApplicationController
  # For the researcher, they can visit `/setup` to add coupon codes for their research. Currently there is a single text field where the research can enter a code.
  def index
    render 'index', locals: { incentives: incentives }
  end

  def create

  end

  private

  def permitted_params
    params.permit(:codes)
  end

  def codes
    permitted_params[:codes]
  end

  def incentives
    Incentive.all
  end
end

class SetupsController < ApplicationController
  # For the researcher, they can visit `/setup` to add coupon codes for their research. Currently there is a single text field where the research can enter a code.
  def index
    render 'index', locals: { incentives: incentives }
  end

  private

  def incentives
    Incentive.all
  end
end

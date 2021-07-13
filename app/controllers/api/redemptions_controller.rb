class Api::RedemptionsController < ::Api::BaseController
  # GET /api/incentives/:incentive_id/redemptions
  def index
    render json: { redeemed: redeemed }, status: :ok
  end

  private

  # Incentive for the supplied ID
  #
  # @return [<Incentive>]
  def incentive
    Incentive.find_by!(id: params[:incentive_id])
  end

  # Candidate inventives for the incentive
  #
  # @return [ActiveRecord::Collection<CandidateIncentive>]
  def candidate_incentives
    incentive.candidate_incentives
  end

  # The redeemed candidate incentives based on the incentive
  #
  # @return [ActiveRecord::Collection<CandidateIncentive>]
  def redeemed
    candidate_incentives.redeemed_incentives
  end
end

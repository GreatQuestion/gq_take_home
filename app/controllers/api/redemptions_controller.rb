module Api
  class RedemptionsController < ::Api::BaseController
    # POST /api/incentives/:incentive_id/redemptions
    def create
      candidate_incentive = candidate_incentives.create(redeemed: true)

      if candidate_incentive.persisted?
        render json: {
          candidateIncentive: candidate_incentive,
          redeemed: redeemed,
        }, status: :created
      else
        render json: {
          errors: candidate_incentive.errors.messages,
        }, status: :unprocessable_entity
      end
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
end

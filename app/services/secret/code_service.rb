module Secret
  class CodeService
    def initialize(codes:)
      @codes = codes
      @split_codes = codes.gsub(' ', '').split(',')
      @timestamps = {
        created_at: Time.zone.now,
        updated_at: Time.zone.now,
      }
    end

    # Return the single code to be updated otherwise map and return the array of hashes to be bulk inserted
    def perform
      if split_codes.count.eql?(1)
        { code: code }.merge(timestamps)
      else
        split_codes.map do |code|
          { code: code }.merge(timestamps)
        end
      end
    end

    def self.all_codes
      ::Incentive.all.map(&:code).join(', ')
    end

    private

    attr_reader :split_codes,
                :timestamps
  end
end
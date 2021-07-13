::CODES = %w(
  8c0dac1425a9
  8330e3608b67
  78001f2b7515
  da140d87d832
  e6dbd8ce0e9b
  241275fafb3a
  bed98a242d5f
  17d76d028fe1
  e542f0076e54
  62250fe16e6f
)

class CodeGenerationService
  def self.perform
    ::CODES.each do |code|
      incentive = Incentive.create(code: code)

      4.times do |i|
        incentive.candidate_incentives.create!
      end
    end
  end
end

::CODES = %w(8xWnvk6a)

::CODES.each do |code|
  incentive = Incentive.create(code: code)

  4.times do |i|
    incentive.candidate_incentives.create!
  end
end
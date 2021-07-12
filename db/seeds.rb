::CODES = %w(8xWnvk6a)

::CODES.each do |code|
  Incentive.create(code: code)
end
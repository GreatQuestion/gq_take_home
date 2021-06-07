FactoryBot.define do
  factory :incentive do
    code {SecureRandom.hex(6)}
  end
end
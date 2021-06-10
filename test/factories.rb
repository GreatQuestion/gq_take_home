FactoryBot.define do
  factory :user, class: 'User'

  factory :incentive, class: 'Incentive' do |i|
    i.code { SecureRandom.hex(6) }
    i.user
  end
end

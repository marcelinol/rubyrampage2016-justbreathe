require 'rails_helper'

RSpec.describe MeditationSession, type: :model do
  it { is_expected.to have_many(:participants) }
  it { is_expected.to validate_presence_of(:duration) }
  it { is_expected.to validate_numericality_of(:duration).is_greater_than(0) }
  it { is_expected.to accept_nested_attributes_for(:participants) }
end

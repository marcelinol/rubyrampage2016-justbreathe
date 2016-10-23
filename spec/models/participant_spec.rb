require 'rails_helper'

RSpec.describe Participant, type: :model do
  it { is_expected.to belong_to(:meditation_session) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_length_of(:name).is_at_most(25) }
end

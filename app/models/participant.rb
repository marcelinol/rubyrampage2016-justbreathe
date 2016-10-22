class Participant < ApplicationRecord
  belongs_to :meditation_session, required: false

  validates :name, presence: true
end

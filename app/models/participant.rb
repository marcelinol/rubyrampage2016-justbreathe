class Participant < ApplicationRecord
  belongs_to :meditation_session, required: false

  validates :name, presence: true, length: { maximum: 25 }

end

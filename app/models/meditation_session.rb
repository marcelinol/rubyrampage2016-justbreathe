class MeditationSession < ApplicationRecord
  has_many :participants
  accepts_nested_attributes_for :participants

  enum status: [:waiting, :started, :finished]

  validates :duration, presence: true, numericality: { greater_than: 0 }
end

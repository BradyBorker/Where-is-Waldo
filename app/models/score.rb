class Score < ApplicationRecord
  belongs_to :map

  validates :name, presence: true
  validates :time, presence: true
end

class Character < ApplicationRecord
  belongs_to :map

  validates :name, presence: true
  validates :coordinates, presence: true
end

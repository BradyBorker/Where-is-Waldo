class Map < ApplicationRecord
  has_many :characters
  has_many :scores

  validates :title, presence: true, uniqueness: true
end

class Map < ApplicationRecord
  has_many :characters

  validates :title, presence: true, uniqueness: true
end

class Map < ApplicationRecord
  validates :title, presence: true, uniqueness: true
end

class Character < ApplicationRecord
  belongs_to :map

  validates :name, presence: true
  validates :coordinates, presence: true

  def correct_guess?(submittedCoordinates)
    return false if submittedCoordinates.empty?
    
    weight = 0.019
    parsedCoords = JSON.parse(coordinates)
    
    x = parsedCoords['x']
    y = parsedCoords['y']
    
    guessXRight = submittedCoordinates['x'] + weight
    guessXLeft = submittedCoordinates['x'] - weight
    guessYDown = submittedCoordinates['y'] + weight
    guessYUp = submittedCoordinates['y'] - weight

    return x >= guessXLeft && x <= guessXRight && y <= guessYDown && y >= guessYUp
  end
end

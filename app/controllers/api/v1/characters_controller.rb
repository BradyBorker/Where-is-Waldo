class Api::V1::CharactersController < ApplicationController
  before_action :parse_coordinates
  
  def show
    character = Map.find_by(title: params[:map_id]).characters.find_by(name: params[:id])

    render json: character.correct_guess?(@submittedCoordinates)
  end

  private
  
  def parse_coordinates
    @submittedCoordinates = JSON.parse(params[:coordinates])
  end
end
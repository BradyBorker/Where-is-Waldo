class Api::V1::CharactersController < ApplicationController
  def show
    submittedCoordinates = JSON.parse(params[:coordinates])
    character = Map.find_by(title: params[:map_id]).characters.find_by(name: params[:id])
    
    render json: character
  end
end
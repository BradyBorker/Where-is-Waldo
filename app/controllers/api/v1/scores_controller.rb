class Api::V1::ScoresController < ApplicationController
  def index
    map = Map.find_by(title: params[:map_id])
    scores = map.scores.order(time: :asc)

    render json: scores
  end

  def create
  end
end

class Api::V1::ScoresController < ApplicationController
  def index
    map = Map.find_by(title: params[:map_id])
    scores = map.scores.order(time: :asc)

    render json: scores
  end

  def create
    map = Map.find_by(title: params[:map_id])
    
    if map.scores.create(score_params)
      render json: true
    else
      render json: false
    end
  end

  private

  def score_params
    params.require(:score).permit(:name, :time)
  end
end

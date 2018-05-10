class Api::V1::PlanetsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { planets: Planet.all}
  end
end

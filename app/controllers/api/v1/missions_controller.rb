class Api::V1::MissionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Mission.all
  end

end

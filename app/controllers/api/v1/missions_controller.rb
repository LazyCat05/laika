class Api::V1::MissionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Mission.all
  end

  def create
    data = JSON.parse(request.body.read)
    new_mission = Mission.new(name: data['missionName'])
    mission_designer = current_user
    new_mission.user = mission_designer
    new_mission.save
    render json: new_mission
  end

end

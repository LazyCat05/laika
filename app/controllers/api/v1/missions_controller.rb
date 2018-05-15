class Api::V1::MissionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Mission.all
  end

  def create
    data = JSON.parse(request.body.read)
    new_mission = Mission.new(name: data['missionName'])
    new_mission.total_delta_v = 0
    new_mission.total_mission_duration = 0
    mission_designer = current_user
    new_mission.user = mission_designer
    new_mission.save
    render json: new_mission
  end

  def show
    render json: Mission.find(params[:id])
  end

end

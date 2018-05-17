class Api::V1::MissionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  serialization_scope :current_user

  def index
    # user = current_user
    mission_list = Mission.where(user: current_user)
    render json: mission_list
  end

  def create
    data = JSON.parse(request.body.read)
    new_mission = Mission.new(name: data['missionName'])
    mission_designer = current_user
    new_mission.user = mission_designer
    new_mission.save
    render json: new_mission
  end

  def show
    render json: Mission.find(params[:id])
  end

end

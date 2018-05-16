class MissionSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_delta_v, :total_mission_duration
  has_many :flights
end

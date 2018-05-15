class Mission < ApplicationRecord
  has_many :flights

  belongs_to :user

  def calc_mission_delta_v
    total = 0
    self.flights.each do |flight|
      total += flight.delta_v
    end
    self.total_delta_v = total
  end

  def calc_mission_duration
    #this is a placeholder; loiter times need to be accounted for as well
    total = 0
    self.flights.each do |flight|
      total += flight.time_of_flight
    end
    self.total_mission_duration = total
  end
end

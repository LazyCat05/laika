require 'rails_helper'

describe Mission do
  context 'New missions should have no total delta-v or duration' do

    it 'should calculate the total delta_v to be 0' do
      user1 = create(:user)
      new_mission = Mission.create(user: user1, name: "New Mission")
      new_mission.calc_mission_delta_v

      expect(new_mission.total_delta_v).to eq(0)
    end

    it 'should calcualte the total mission duration to be 0' do
      user1 = create(:user)
      new_mission = Mission.create(user: user1, name: "New Mission")
      new_mission.calc_mission_duration

      expect(new_mission.total_mission_duration).to eq(0)

    end
  end
end

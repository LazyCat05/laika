require 'rails_helper'
RSpec.describe Api::V1::MissionsController, type: :controller do
  describe 'POST#create' do
    it 'should create a new mission' do
      post_json = {missionName: "Test Mission"}.to_json
      user1 = create(:user)
      sign_in(user1, scope: :user)

      post(:create, body: post_json)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json['mission']['name']).to eq('Test Mission')
      expect(returned_json['mission']['flights']).to eq([])
      expect(returned_json['mission']['total_delta_v']).to eq(0)
    end
  end

  describe 'GET#show' do
    it 'should create return the selected mission' do
      user1 = create(:user)
      sign_in(user1, scope: :user)
      test_mission = Mission.create(user: user1, name: 'Test Mission')

      get :show, params: { id: test_mission.id }

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(response.content_type).to eq 'application/json'
      expect(returned_json['mission']['name']).to eq('Test Mission')

    end
  end

  describe 'GET#index' do
    it 'should return the current users missions' do

      user1 = create(:user)
      user2 = create(:user)
      test_mission1 = Mission.create(user: user1, name: 'Mission 1')
      test_mission2 = Mission.create(user: user1, name: 'Mission 2')
      user2_mission = Mission.create(user: user2, name: 'Mission 3')
      sign_in(user1, scope: :user)

      get :index

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json['missions'][1]['name']).to eq('Mission 2')
      expect(returned_json['missions'].length).to eq(2)

    end
  end
end

require 'rails_helper'
RSpec.describe Api::V1::MissionsController, type: :controller do
  describe 'POST#create' do
    it 'should create a new mission' do
      post_json = {name: "Test Mission"}.to_json
      user1 = User.create!
      sign_in(user1, scope: :user)

      post(:create, body: post_json)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(resposne.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expedt(returned_json).to_not be_kind_of(Array)
      expect(returned_json['mission']['name']).to eq('Test Mission')
      expect(returned_json['mission']['flights']).to eq([])
      expect(returned_json['mission']['total_delta_v']).to eq(0)
    end
  end
end

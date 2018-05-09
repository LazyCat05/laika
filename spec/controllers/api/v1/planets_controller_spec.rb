require 'rails_helper'
RSpec.describe Api::V1::PlanetsController do
  describe 'GET#index' do
    it 'should return a list of planets' do
      mars = Planet.create(name: 'Mars')
      earth = Planet.create(name: 'Earth')

      binding.pry

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json['planets'][0]['name']).to eq('Mars')
      expect(returned_json['planets'][1]['name']).to eq('Earth')
    end
  end
end

class Api::V1::FlightsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: { flights: Flight.all}
  end
end

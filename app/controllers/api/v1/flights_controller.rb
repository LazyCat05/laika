class Api::V1::FlightsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Flight.all
  end

  def create
    data = JSON.parse(request.body.read)
    origin_planet = Planet.where(name: data['flightOrigin'])[0]
    destination_planet = Planet.where(name: data['flightDestination'])[0]
    departure_date = Date.parse(data['departureDate'])

    new_flight = Flight.new(departure_date: departure_date)
    Origin.new(flight: new_flight, planet: origin_planet)
    Destination.new(flight: new_flight, planet: destination_planet)

    origin_position = origin_planet.coordinates(departure_date)
    destination_position = destination_planet.coordinates(departure_date)
    distance = new_flight.interplanetary_distance(origin_position, destination_position)
    new_flight.distance = distance
    new_flight.delta_v = new_flight.hohmann_transfer_delta_v(origin_position[5], destination_position[5])
    new_flight.angular_separation = new_flight.calc_angular_separation(origin_position, destination_position)

    render json: new_flight
  end
end

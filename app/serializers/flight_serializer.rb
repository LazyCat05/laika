class FlightSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure_date, :distance, :origin_planet, :origin_coordinates, :destination_planet, :destination_coordinates, :delta_v, :angular_separation

  def origin_planet
    object.origin.planet.name
  end

  def origin_coordinates
    object.origin.planet.coordinates(object.departure_date)
  end

  def destination_planet
    object.destination.planet.name
  end

  def destination_coordinates
    object.destination.planet.coordinates(object.departure_date)
  end
end

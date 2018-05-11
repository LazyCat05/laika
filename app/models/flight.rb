class Flight < ApplicationRecord
  has_one :origin
  has_one :destination
  has_one :planet, through: :origin
  has_one :planet, through: :destination

  def to_radians(degrees)
    radians = degrees * ( Math::PI / 180)
  end

  def to_degrees(radians)
    degrees = radians * ( 180 / Math::PI )
  end

  def interplanetary_distance(planet1, planet2)
  Math.sqrt(((planet1[0] - planet2[0]) ** 2) + ((planet1[1] - planet2[1]) ** 2) + ((planet1[2] - planet2[2]) ** 2))
  end

  def calc_angular_separation(planet1, planet2)
  planet1_longitude = to_radians(planet1[3])
  planet2_longitude = to_radians(planet2[3])
  planet1_latitude = to_radians(planet1[4])
  planet2_latitude = to_radians(planet2[4])
  angular_sep_value = Math.sin(planet1_latitude) * Math.sin(planet2_latitude) + Math.cos(planet1_latitude) * Math.cos(planet2_latitude) * Math.cos(planet1_longitude - planet2_longitude)
  angular_sep_value = Math.acos(angular_sep_value)
  to_degrees(angular_sep_value)
  end

  def hohmann_transfer_delta_v (distance_planet1, distance_planet2)
  mu = 1.32715 * 10 ** 20
  distance_planet1 = distance_planet1 * 1.496 * 10 ** 11
  distance_planet2 = distance_planet2 * 1.496 * 10 ** 11
  transfer_semimajor_axis = (distance_planet1 + distance_planet2) / 2
  orbit_velocity_origin = Math.sqrt(mu/distance_planet1)
  insertion_burn_velocity = Math.sqrt(mu * ((2 / distance_planet1) - (1/transfer_semimajor_axis)))
  delta_v_insertion_burn = insertion_burn_velocity - orbit_velocity_origin
  orbit_velocity_destination = Math.sqrt(mu/distance_planet2)
  arrival_burn_velocity = Math.sqrt(mu * ((2/distance_planet2) - (1 / transfer_semimajor_axis)))
  arrival_delta_v = arrival_burn_velocity - orbit_velocity_destination
  delta_v = delta_v_insertion_burn.abs + arrival_delta_v.abs
  end
end

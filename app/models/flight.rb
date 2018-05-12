class Flight < ApplicationRecord
  has_one :origin
  has_one :destination
  has_one :planet, through: :origin
  has_one :planet, through: :destination
  belongs_to :mission

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

  def calc_required_phase_angle(origin_planet_distance, destination_planet_distance)
    mu = 1.32715 * 10 ** 20
    origin_planet_distance = origin_planet_distance * 1.496 * 10 ** 11
    destination_planet_distance = destination_planet_distance * 1.496 * 10 ** 11
    phase_angle = (Math::PI) * (1 - ((1 / (2 * Math.sqrt(2)))) * Math.sqrt((origin_planet_distance/destination_planet_distance + 1) ** 3))
    phase_angle = to_degrees(phase_angle)
    puts "#{phase_angle}"
    phase_angle = phase_angle % 180
    puts "#{phase_angle}"
    if phase_angle < 0
      phase_angle = phase_angle + 180
    end
    phase_angle
  end

  def launch_window_iterator(origin_planet, destination_planet, date)
    initial_date = date.ajd.to_f
    time_value = ((initial_date - 2415020) / 36525).to_f
    planet_1_coordinates = origin_planet.coordinates(date)
    planet_2_coordinates = destination_planet.coordinates(date)
    separation = calc_angular_separation(planet_1_coordinates, planet_2_coordinates)
    separation_lower_bound = separation - 0.5
    separation_upper_bound = separation + 0.5
    target_angle = calc_required_phase_angle(origin_planet.semimajor_axis, destination_planet.semimajor_axis)
    launch_window_date = date
    while !target_angle.between?(separation_lower_bound, separation_upper_bound) do
      launch_window_date = launch_window_date + 1
      time_value = ((launch_window_date.ajd.to_f - 2415020) / 36525.0)
      planet_1_coordinates = origin_planet.coordinates(launch_window_date)
      planet_2_coordinates = destination_planet.coordinates(launch_window_date)
      separation = calc_angular_separation(planet_1_coordinates, planet_2_coordinates)
      separation_lower_bound = separation - 0.5
      separation_upper_bound = separation + 0.5
      target_angle = calc_required_phase_angle(origin_planet.semimajor_axis, destination_planet.semimajor_axis)
      puts "phase_angle = #{target_angle}"
      puts "angular separation = #{separation}"

    end
    launch_window_date
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

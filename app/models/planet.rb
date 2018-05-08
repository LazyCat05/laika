require 'date'
require 'math'
class Planet < ApplicationRecord
  def to_radians(degrees)
    radians = degrees * ( Math::PI / 180)
  end

  def to_degrees(radians)
    degrees = radians * ( 180 / Math::PI )
  end

  def calculate_parameter(parameter, correction, date)
    julian_date = (date.ajd.to_f - 2451545.0)/36525
    adjusted_parameter = parameter + correction * julian_date
  end

  def calc_argument_of_perihelion(longitude_of_perihelion, ascending_node_longitude)
    longitude_of_perihelion - ascending_node_longitude
  end

  def mean_anomaly(mean_longitude, longitude_of_perihelion)
    value = (mean_longitude - longitude_of_perihelion)
    if value < 0
      value += 360
    end
    return value
  end

  def perihelion_distance(semimajor_axis, eccentricity)
    semimajor_axis * (1 - eccentricity)
  end

  def aphelion_distance(semimajor_axis, eccentricity)
    semimajor_axis * (1 + eccentricity)
  end

  def eccentric_anomaly(mean_anomaly, eccentricity, longitude_of_perihelion)
    mean_anomaly_radians = to_radians(mean_anomaly)
    eccentric_anomaly_value = mean_anomaly_radians + eccentricity * Math.sin(mean_anomaly_radians)
    10.times do
      eccentric_anomaly_value = mean_anomaly_radians + eccentricity * Math.sin(eccentric_anomaly_value)
    end
    eccentric_anomaly_value = to_degrees(eccentric_anomaly_value)
  end

  def true_anomaly(semimajor_axis, eccentric_anomaly, eccentricity)
    ecc_ann_radians = to_radians(eccentric_anomaly)
    x = semimajor_axis * (Math.cos(ecc_ann_radians) - eccentricity)
    y = semimajor_axis * Math.sqrt( 1 - eccentricity * eccentricity ) * Math.sin(ecc_ann_radians)
    true_anomaly_radians = Math.atan2( y, x)
    true_anomaly_value = to_degrees(true_anomaly_radians)
    if true_anomaly_value < 0
      true_anomaly_value = true_anomaly_value + 360
    end
    return true_anomaly_value
  end

  def distance(semimajor_axis, eccentric_anomaly, eccentricity)
    ecc_ann_radians = to_radians(eccentric_anomaly)
    x = semimajor_axis * (Math.cos(ecc_ann_radians) - eccentricity)
    y = semimajor_axis * Math.sqrt( 1 - eccentricity * eccentricity ) * Math.sin(ecc_ann_radians)
    distance = Math.sqrt(x * x + y * y)
  end

  def radius_vector(semimajor_axis, eccentricity, eccentric_anomaly)
    radius = semimajor_axis * (1 - eccentricity * Math.cos(to_radians(eccentric_anomaly)))
  end

  def ecliptic_coords(distance, longitude_of_the_ascending_node, true_anomaly, argument_of_perihelion, inclination)
    longitude_of_the_ascending_node = degrees_to_radians(longitude_of_the_ascending_node)
    true_anomaly = degrees_to_radians(true_anomaly)
    argument_of_perihelion = degrees_to_radians(argument_of_perihelion)
    inclination = degrees_to_radians(inclination)
    xecliptic_coord = distance * (Math.cos(longitude_of_the_ascending_node) * Math.cos(true_anomaly + argument_of_perihelion) - Math.sin(longitude_of_the_ascending_node) * Math.sin(true_anomaly + argument_of_perihelion) * Math.cos(inclination))
    yecliptic_coord = distance * (Math.sin(longitude_of_the_ascending_node) * Math.cos(true_anomaly + argument_of_perihelion) + Math.cos(longitude_of_the_ascending_node) * Math.sin(true_anomaly + argument_of_perihelion) * Math.cos(inclination))
    zecliptic_coord = distance * Math.sin(true_anomaly + argument_of_perihelion) * Math.sin(inclination)
    return [xecliptic_coord, yecliptic_coord, zecliptic_coord]
  end

  def argument_of_latitude(mean_longitude, true_anomaly, mean_anomaly, longitude_of_the_ascending_node)
    mean_longitude + true_anomaly - mean_anomaly - longitude_of_the_ascending_node
  end

  def ecliptic_latitude(argument_of_latitude, inclination)
    argument_of_latitude = degrees_to_radians(argument_of_latitude)
    inclination = degrees_to_radians(inclination)
    sin_b = Math.sin(argument_of_latitude) * Math.sin(inclination)
    b = Math.asin(sin_b)
    radians_to_degrees(b)
  end

  def heliocentric_coorinates (distance, longitude, latitude)
    longitude = degrees_to_radians(longitude)
    latitude = degrees_to_radians(latitude)
    coordinate_array = []
    x = distance * Math.cos(latitude) * Math.cos(longitude)
    coordinate_array << x
    y = distance * Math.cos(latitude) * Math.sin(longitude)
    coordinate_array << y
    z = distance * Math.sin(latitude)
    coordinate_array << z
    coordinate_array
  end

  def self.coordinates(time_in_centuries)
    puts self.name
    planet_mean_longitude = calculate_parameter(self.mean_longitude, self.mean_longitude_correction, time_in_centuries) % 360
    puts "L = #{planet_mean_longitude}"
    planet_semimajor_axis = calculate_parameter(self.semimajor_axis, self.semimajor_axis_correction, time_in_centuries)
    puts "a = #{planet_semimajor_axis}"
    planet_eccentricity = calculate_parameter(self.eccentricity, self.eccentricity_correction, time_in_centuries)
    puts "e = #{planet_eccentricity}"
    planet_inclination = calculate_parameter(self.inclination, self.inclination_correction, time_in_centuries)
    puts "i = #{planet_inclination}"
    planet_longitude_of_perihelion = calculate_parameter(self.longitude_of_perihelion, self.longitude_of_perihelion_correction, time_in_centuries)
    puts "p = #{planet_longitude_of_perihelion}"
    planet_longitude_of_the_ascending_node = calculate_parameter(self.ascending_node_longitude, self.ascending_node_longitude_correction, time_in_centuries)
    puts "W = #{planet_longitude_of_the_ascending_node}"
    planet_argument_of_perihelion = calc_argument_of_perihelion(planet_longitude_of_perihelion, planet_longitude_of_the_ascending_node)
    puts "w = #{planet_argument_of_perihelion}"
    planet_mean_anomaly = mean_anomaly(planet_mean_longitude, planet_longitude_of_perihelion)
    puts "M = #{planet_mean_anomaly}"
    planet_perihelion = perihelion_distance(planet_semimajor_axis, planet_eccentricity)
    puts "R(p) = #{planet_perihelion}"
    planet_aphelion = aphelion_distance(planet_semimajor_axis, planet_eccentricity)
    puts "R(a) = #{planet_aphelion}"
    planet_eccentric_anomaly = eccentric_anomaly_radians(planet_mean_anomaly, planet_eccentricity, planet_longitude_of_perihelion)
    puts "E = #{planet_eccentric_anomaly}"
    planet_true_anomaly = true_anomaly(planet_semimajor_axis, planet_eccentric_anomaly, planet_eccentricity)
    puts "n = #{planet_true_anomaly}"
    planet_radius_vector = radius_vector(planet_semimajor_axis, planet_eccentricity, planet_eccentricity)
    puts "r_v = #{planet_radius_vector}"
    planet_distance_from_primary = distance(planet_semimajor_axis, planet_eccentric_anomaly, planet_eccentricity)
    planet_longitude = (planet_true_anomaly + planet_longitude_of_perihelion) % 360
    planet_ecliptic_coords = ecliptic_coords(planet_distance_from_primary, planet_longitude_of_the_ascending_node, planet_true_anomaly, planet_argument_of_perihelion, planet_inclination)
    puts "X Ecliptic Coord = #{planet_ecliptic_coords[0]}"
    puts "Y Ecliptic Coord = #{planet_ecliptic_coords[1]}"
    puts "Z Ecliptic Coord = #{planet_ecliptic_coords[2]}"
    planet_argument_of_latitude = argument_of_latitude(planet_mean_longitude, planet_true_anomaly, planet_mean_anomaly, planet_longitude_of_the_ascending_node)
    puts "u = #{planet_argument_of_latitude}"
    planet_ecliptic_latitude = ecliptic_latitude(planet_argument_of_latitude, planet_inclination)
    planet_heliocentric_coords = heliocentric_coorinates(planet_distance_from_primary, planet_longitude, planet_ecliptic_latitude)
    puts ""
    puts "Coordinates #{self.[:object_name]}:"
    puts "d = #{planet_distance_from_primary}"
    puts "Latitude (b) = #{planet_ecliptic_latitude}"
    puts "Longitude (lon) = #{planet_longitude}"
    puts "#{planet_heliocentric_coords}"
    puts ""
    output_coords = planet_heliocentric_coords
    output_coords << planet_longitude
    output_coords << planet_ecliptic_latitude
    puts "#{output_coords}"
    # output is [x, y, z, longitude, latitude]
    return output_coords
  end


end

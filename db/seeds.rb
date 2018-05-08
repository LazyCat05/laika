# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Planet.create(name: 'Mars', outer_planet_correction: false, mean_longitude: -4.5813164, mean_longitude_correction: 19140.29934243, semimajor_axis: 1.52371243, semimajor_axis_correction: 0.00000097, eccentricity: 0.09336511, eccentricity_correction: 0.00009149, inclination: 1.85181869, inclination_correction: -0.00724757, longitude_of_perihelion: -23.91744784, longitude_of_perihelion_correction: 0.45223625, ascending_node_longitude: 49.71320984, ascending_node_longitude_correction: -0.26852431)
Planet.create(name: 'Earth', outer_planet_correction: false, semimajor_axis: 1.00000018, semimajor_axis_correction: -0.00000003, eccentricity: 0.01673163, eccentricity_correction: -0.00003661, inclination: -0.00054346, inclination_correction: -0.01337178, mean_longitude: 100.46691572, mean_longitude_correction: 35999.37306329, longitude_of_perihelion: 102.93005885, longitude_of_perihelion_correction: 0.31795260, ascending_node_longitude: -5.11260389, ascending_node_longitude_correction: -0.24123856)

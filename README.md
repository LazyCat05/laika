[![Build Status](https://codeship.com/projects/b8d617b0-3528-0136-09f3-3e151ebb66ce/status?branch=master)]
[![Code Climate](https://codeclimate.com/github/LazyCat05/laika/badges/gpa.svg)](https://codeclimate.com/github/LazyCat05/laika)
[![Coverage Status](https://coveralls.io/repos/github/LazyCat05/laika/badge.svg?branch=master)](https://coveralls.io/github/LazyCat05/laika?branch=master)


# README

Laika - Astronomical Calculator and Simulation Toy

Laika is an astronomical calculator and trajectory simulator, built as a final project for my time at Launch Academy.

Laika takes two planets and a date from the user, and returns the position of those two planets in heliocentric rectangular coordinates. It also calculates a Hohmann trajectory between the first and second planet with a launch window and required delta-V.

Flights can be calculated without logging in, but can only be saved (as parts of a mission) by a logged in user.

Laika has very little configuration necessary, but the seed data is essential for performing calculations.

Before running Laika, be sure to:

rake db:create
rake db:migrate
rake db:seed

Without the seed data, Laika can't perform any calculations, and as of the current version, there is no html form to input planetary data. So use the seed data, because it's super tedious to try and enter all those values in the command line.

The rails server can then be started with:

rails s

Laika uses React.js for the front end, except for user authentication, which is handled by Devise. Database is PostgreSQL. Server is built with Rails 5.2.0 and Ruby 2.3.3. All of the positioning calculations are performed on the server side, with data from from the Jet Propulsion Laboratories Solar System Dynamic page (https://ssd.jpl.nasa.gov/?planet_pos). Note that this data is in ASCII, not JSON. The formulae that Laika uses are also found on SSD page, in the PDF at https://ssd.jpl.nasa.gov/txt/aprx_pos_planets.pdf. I would not have been able to create Laika without these resources. The Rocket and Spaceflight Technology page (http://www.braeunig.us/space/) and Atomic Rockets (http://www.projectrho.com/public_html/rocket/index.php) were also invaluable in developing Laika. I hope to make more calculators using the excellent resources from all of these sources in the futuer.

Laika's trajectories should be taken with a grain of salt -- they assume circular, co-planer orbits, while the planetary positions are calculated as elliptical and inclined. If you plan on sending a spacecraft, I would recommend using a more precise calculator.

Since Laika was built as the culmination of my time at Launch Academy (https://launchacademy.com/), it would not have been possible without the help of my cohort-mates and the experience engineers on staff, especially:

* AmyLynn Arrington (github.com/AL6981)
* Nick Alberts (github.com/nwalberts)
* Brianna Kincart (github.com/bkincart)

Laika will probably go quiet for a while, but hopefully I'll be able to update it in the future with a better trajectory calculator and a way to access asteroid orbital characteristics from NASA or the IAU MPC.

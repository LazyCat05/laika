class Flight < ApplicationRecord
  has_one :origin
  has_one :destination
  has_one :planet, through: :origin
  has_one :planet, through: :destination

  def interplanetary_distance(planet1, planet2)
  Math.sqrt(((planet1[0] - planet2[0]) ** 2) + ((planet1[1] - planet2[1]) ** 2) + ((planet1[2] - planet2[2]) ** 2))
  end
  
end

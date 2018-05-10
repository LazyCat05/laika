class Destination < ApplicationRecord
  belongs_to :flight
  belongs_to :planet
end

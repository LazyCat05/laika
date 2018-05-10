class Flight < ApplicationRecord
  has_one :origin
  has_one :destination
  has_one :planet, through: :origin
  has_one :planet, through: :destination
end

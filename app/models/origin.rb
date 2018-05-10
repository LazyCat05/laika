class Origin < ApplicationRecord
  belongs_to :flight
  belongs_to :planet
end

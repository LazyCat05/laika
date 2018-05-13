class Mission < ApplicationRecord
  has_many :flights

  belongs_to :user
end

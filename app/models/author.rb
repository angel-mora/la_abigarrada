class Author < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :articles, dependent: :destroy
  has_one_attached :photo
  has_one_attached :cv

  validates :name, presence: true, uniqueness: true
  validates :bio, presence: true
end

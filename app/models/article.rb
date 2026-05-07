class Article < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  belongs_to :author
  has_rich_text :content
  has_one_attached :featured_image

  enum :status, { draft: 0, published: 1 }, default: :draft
  enum :palette, { wiphala: 0, feminista: 1, panafricana: 2, lgbtiq: 3, cmyk: 4, rojinegra: 5 }, default: :wiphala

  validates :title, presence: true
  validates :status, presence: true
  validates :palette, presence: true

  scope :published, -> { where(status: :published).order(public_date: :desc, created_at: :desc) }

  before_save :set_published_at, if: :will_save_change_to_status?

  private

  def set_published_at
    if published?
      self.published_at ||= Time.current
      self.public_date ||= Date.current
    end
  end
end

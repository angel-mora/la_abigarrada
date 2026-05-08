class PagesController < ApplicationController
  allow_unauthenticated_access only: :home

  def home
    @latest_articles = Article.published.limit(4)
  end
end

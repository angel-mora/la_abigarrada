class AuthorsController < ApplicationController
  allow_unauthenticated_access only: [:show]

  def show
    @author = Author.friendly.find(params[:slug])
    @articles = @author.articles.published.page(params[:page]).per(12)
  end
end

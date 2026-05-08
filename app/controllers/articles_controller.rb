class ArticlesController < ApplicationController
  allow_unauthenticated_access only: [:index, :show]

  def index
    @articles = Article.published.page(params[:page]).per(12)
  end

  def show
    @article = Article.friendly.find(params[:slug])
    # Prevent viewing drafts unless authenticated as admin (Current.session exists)
    unless @article.published? || authenticated?
      redirect_to articles_path, alert: "El artículo solicitado no está disponible."
    end
  end
end

module Admin
  class ArticlesController < BaseController
    before_action :set_article, only: [:edit, :update, :destroy, :publish, :unpublish]

    def index
      @articles = Article.all.order(created_at: :desc)
    end

    def new
      @article = Article.new
    end

    def create
      @article = Article.new(article_params)
      
      if params[:article][:docx_file].present?
        @article.content = DocxImporter.import(params[:article][:docx_file].path)
      end

      if @article.save
        redirect_to admin_articles_path, notice: "Artículo creado exitosamente."
      else
        render :new, status: :unprocessable_entity
      end
    end

    def edit
    end

    def update
      if params[:article][:docx_file].present?
        @article.content = DocxImporter.import(params[:article][:docx_file].path)
      end

      if @article.update(article_params)
        redirect_to admin_articles_path, notice: "Artículo actualizado."
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @article.destroy
      redirect_to admin_articles_path, notice: "Artículo eliminado."
    end

    def publish
      @article.published!
      notify_subscribers(@article)
      redirect_to admin_articles_path, notice: "Artículo publicado y suscriptores notificados."
    end

    def unpublish
      @article.draft!
      redirect_to admin_articles_path, notice: "Artículo movido a borradores."
    end

    private

    def set_article
      @article = Article.friendly.find(params[:id])
    end

    def article_params
      params.require(:article).permit(:title, :status, :palette, :author_id, :public_date, :featured_image, :content)
    end

    def notify_subscribers(article)
      Subscriber.find_each do |subscriber|
        NewsletterMailer.published_article(article, subscriber).deliver_later
      end
    end
  end
end

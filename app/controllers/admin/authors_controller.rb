module Admin
  class AuthorsController < BaseController
    before_action :set_author, only: [:edit, :update, :destroy]

    def index
      @authors = Author.all
    end

    def new
      @author = Author.new
    end

    def create
      @author = Author.new(author_params)
      if @author.save
        redirect_to admin_authors_path, notice: "Autor creado."
      else
        render :new, status: :unprocessable_entity
      end
    end

    def edit
    end

    def update
      if @author.update(author_params)
        redirect_to admin_authors_path, notice: "Autor actualizado."
      else
        render :edit, status: :unprocessable_entity
      end
    end

    def destroy
      @author.destroy
      redirect_to admin_authors_path, notice: "Autor eliminado."
    end

    private

    def set_author
      @author = Author.friendly.find(params[:id])
    end

    def author_params
      params.require(:author).permit(:name, :bio, :photo, :cv)
    end
  end
end

class NewsletterMailer < ApplicationMailer
  def published_article(article, subscriber)
    @article = article
    @subscriber = subscriber

    mail(to: @subscriber.email, subject: "Nueva transmisión: #{@article.title}")
  end
end

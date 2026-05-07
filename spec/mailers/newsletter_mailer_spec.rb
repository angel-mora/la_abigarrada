require "rails_helper"

RSpec.describe NewsletterMailer, type: :mailer do
  describe "published_article" do
    let(:author) { create(:author) }
    let(:article) { create(:article, author: author) }
    let(:subscriber) { create(:subscriber) }
    let(:mail) { NewsletterMailer.published_article(article, subscriber) }

    it "renders the headers" do
      expect(mail.subject).to eq("Nueva transmisión: #{article.title}")
      expect(mail.to).to eq([subscriber.email])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match(article.title)
    end
  end
end

require "rails_helper"

RSpec.describe NewsletterMailer, type: :mailer do
  describe "published_article" do
    let(:mail) { NewsletterMailer.published_article }

    it "renders the headers" do
      expect(mail.subject).to eq("Published article")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end

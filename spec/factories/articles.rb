FactoryBot.define do
  factory :article do
    title { "MyString" }
    slug { "MyString" }
    status { 1 }
    palette { 1 }
    author { nil }
    published_at { "2026-05-07 15:35:41" }
    public_date { "2026-05-07" }
  end
end

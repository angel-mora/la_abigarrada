# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

user = User.find_or_create_by!(email_address: "admin@laabigarrada.com") do |u|
  u.password = "password123"
end

nina = Author.find_or_create_by!(name: "Ninoska Durán") do |a|
  a.bio = "Abogada y activista feminista boliviana."
end

max = Author.find_or_create_by!(name: "Max Jorge Hinderer Cruz") do |a|
  a.bio = "Escritor y curador."
end

puts "Seed completed: Admin user and Authors created."

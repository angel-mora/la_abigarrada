Rails.application.routes.draw do
  root "pages#home"
  get "home", to: "pages#home"
  get "internal/identidad", to: "identity#show", as: :identity_manual
end

Rails.application.routes.draw do
  root "pages#home"
  
  get "home", to: "pages#home"
  get "internal/identidad", to: "identity#show", as: :identity_manual
  
  resources :articles, only: [:index, :show], param: :slug
  resources :authors, only: [:show], param: :slug
  resources :subscribers, only: [:create]
  
  namespace :admin do
    root to: "articles#index"
    resources :articles do
      member do
        patch :publish
        patch :unpublish
      end
    end
    resources :authors
  end

  # Authentication
  resource :session
  resources :passwords, param: :token
end

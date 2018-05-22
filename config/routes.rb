Rails.application.routes.draw do
  resources :missions, only: [:index, :create, :show]
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :flights, only: [:index, :create, :destroy]
      resources :missions, only: [:index, :create, :show]
    end
  end
end

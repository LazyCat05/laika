Rails.application.routes.draw do
  resources :missions
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :flights do
        collection do
          post 'save'
        end
        # resources :planets
      end
    end
  end
end

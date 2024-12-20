Rails.application.routes.draw do
  root 'map#index'
  get '*path' => 'map#index'

  namespace :api do
    namespace :v1 do
      resources :maps, only: [:index] do
        resources :characters, only: [:show]
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end

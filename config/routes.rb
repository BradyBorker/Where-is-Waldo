Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :maps, only: [:index] do
        resources :characters, only: [:show]
        resources :scores, only: [:index, :create]
      end
    end
  end
  
  root 'map#index'
  get '*path' => 'map#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end

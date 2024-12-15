Rails.application.routes.draw do
  root 'map#index'
  get '*path' => 'map#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end

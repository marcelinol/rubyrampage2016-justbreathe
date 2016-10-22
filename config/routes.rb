Rails.application.routes.draw do
  resources :meditation_sessions, only: [ :new, :create, :show, :update ]

  get 'welcome/index'

  root to: 'welcome#index'
end

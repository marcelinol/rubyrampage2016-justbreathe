Rails.application.routes.draw do
  resources :meditation_sessions, only: [ :new, :create, :show, :update ] do
    resources :participants, only: [ :new, :create ]
  end

  get 'welcome/index'

  root to: 'welcome#index'
end

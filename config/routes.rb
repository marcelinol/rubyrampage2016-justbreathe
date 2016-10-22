Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'welcome/index'

  resources :meditation_sessions, only: [ :new, :create, :show, :update ] do
    resources :participants, only: [ :new, :create ]
  end

  get :meditation_sessions, to: 'meditation_sessions#new'
end

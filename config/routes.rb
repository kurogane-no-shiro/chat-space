Rails.application.routes.draw do
  devise_for :users
  resources :messages, only: [:index, :create]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :users, only: [:index, :edit, :update,]
    collection do
      get 'search'
  end
end
root 'groups#index'

end

class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      flash[:success] = "ログインしました"
      redirect_to @user
    else
      flash.now[:alert] = "ログインしてください"
      render 'new'
    end
  end

  def edit
  end

def update
  if current_user.update(user_params)
    redirect_to root_path
  end
end

  private

    def user_params
      params.require(:user).permit(:name, :email)
    end
end

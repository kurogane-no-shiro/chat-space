class UsersController < ApplicationController
  def index

    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end


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

  def destroy
  end

  def edit
  end

def update
  if current_user.update(user_params)
    redirect_to root_path
  else
    render :edit
  end
end

  private

    def user_params
      params.require(:user).permit(:name, :email)
    end
end




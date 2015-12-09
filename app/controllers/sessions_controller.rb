class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:session][:username].downcase)
    if @user #&& @user.authenticate(params[:session][:password])
      # Log the user in and redirect to the user's show page.
      log_in(@user)
      redirect_to user_path(@user)
    else
      # Create an error message.
      @error = "Invalid username or password"
      respond_to do |format|
        format.js
        format.html do
          flash[:error] = @error
          redirect_to root_path(error: @error)
        end
      end
    end
  end

  def destroy
    log_out
    @notice = "You have successfully logged out"
    respond_to do |format|
      format.js
      format.html do
        flash[:notice] = @notice
        redirect_to root_path(notice: @notice)
      end
    end
  end

  private
    def log_out
      session.delete(:user)
      @current_user = nil
    end

    def log_in(user)
      session[:user] = user
    end
end

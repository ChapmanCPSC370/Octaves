class KeyboardController < ApplicationController
	def show
    #current_user = User.find_by_id(session[:current_user_id])
    @user = User.find_by(params[:id])
    @user.first_name
   # @current_user.first_name
  # user = session[:user]
  # user.first_name
    #Rails::logger::info "DEBUG: #{@user}"
   # Rails::logger::info "DEBUG: #{current_user}"
	end
end

class KeyboardController < ApplicationController
	def show
    @user = User.find_by(params[:id])
    @user.first_name
	end
end

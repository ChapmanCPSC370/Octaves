module ApplicationHelper
  def current_user
    @current_user ||= User.limit(1).where('id = ?', session[:user_id])
  end
end

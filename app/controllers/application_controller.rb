# frozen_string_literal: true

#:nodoc:
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def current_user
    return nil if session[:user_id].blank?

    User.find_by(id: session[:user_id])
  end

  def authenticate_researcher!
    return if current_user.present? && current_user.researcher?

    status = current_user.present? ? 403 : 401

    render json: { error: 'Access error' }, status: status
  end

  def authenticate_candidate!
    return if current_user.present? && current_user.candidate?

    status = current_user.present? ? 403 : 401

    render json: { error: 'Access error' }, status: status
  end

  def authenticate_user!
    return if current_user.present?

    render json: { error: 'Access error' }, status: 401
  end
end

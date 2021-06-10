# frozen_string_literal: true

module Api
  module Users
    #:nodoc:
    class LoginController < ApplicationController
      def create
        @user = User.find_or_create_by(name: params[:name], role: params[:role])

        if @user.present?
          session[:user_id] = @user.id
          render json: { user_id: @user.id }, status: :ok
        else
          session[:user_id] = nil
          render json: { error: 'something went wrong' }, status: 422
        end
      end
    end
  end
end

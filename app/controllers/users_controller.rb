class UsersController < ApplicationController
  before_action :set_user, only: :show
  # [:show, :update, :destroy]
  # if needing update or destroy, reference full stack build video @ 2:05 for authorize_request

  # GET /users
  # def index
  #   @users = User.all

  #   render json: @users, except:password_digest
  # end

  # GET /users/1
  def show
    render json: @user, except: :password_digest, include: :posts
  end

  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:email, :name, :username, :pronouns, :profile_pic_url, :password)
    end
end

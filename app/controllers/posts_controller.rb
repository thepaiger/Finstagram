class PostsController < ApplicationController
  before_action :set_post, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  # before_action :set_user_post, only: [:update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    @post = @current_user.posts.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post = @current_user.posts.find(params[:id])
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # def set_user_post
    #   @post = @current_user.posts.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:img_url, :caption)
    end
end

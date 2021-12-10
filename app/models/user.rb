class User < ApplicationRecord
  has_secure_password
  has_many :posts
  
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :profile_pic_url, presence: true
  validates :password, length: { minimum: 8 }
end

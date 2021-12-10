class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :username
      t.string :pronouns
      t.string :profile_pic_url
      t.string :password_digest

      t.timestamps
    end
  end
end

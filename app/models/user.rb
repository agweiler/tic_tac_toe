class User < ActiveRecord::Base
  has_and_belongs_to_many :games

  def self.authenticate(email,password)
    user = User.where(email: email).first

    if user.password == password
      user
    else
      nil
    end
  end

end

class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.boolean :playing, :default => false
      t.boolean :waiting, :default => false

      t.timestamps
    end
  end
end

class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string  :winner_id
      t.boolean :is_finished, :default => false
      t.boolean :in_progess, :default => false

      t.timestamps
    end
  end
end

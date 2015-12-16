class AddHighScoreToUsers < ActiveRecord::Migration
  def change
    add_column :users, :chord_high_score, :int, :default => 0
    add_column :users, :scale_high_score, :int, :default => 0
  end
end

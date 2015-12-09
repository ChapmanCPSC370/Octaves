class AddHighScoreToUsers < ActiveRecord::Migration
  def change
    add_column :users, :high_score, :int, :default => 0
  end
end

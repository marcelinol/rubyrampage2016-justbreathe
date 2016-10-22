class DropMeditateSessionShareLinkColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :meditation_sessions, :share_link
  end
end

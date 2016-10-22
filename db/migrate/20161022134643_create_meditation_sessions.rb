class CreateMeditationSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :meditation_sessions do |t|
      t.integer :duration
      t.string :share_link
      t.integer :status, default: 0

      t.timestamps
    end
  end
end

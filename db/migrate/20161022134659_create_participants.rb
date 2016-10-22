class CreateParticipants < ActiveRecord::Migration[5.0]
  def change
    create_table :participants do |t|
      t.string :name
      t.references :meditation_session, foreign_key: true

      t.timestamps
    end
  end
end

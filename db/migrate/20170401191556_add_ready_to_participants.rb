class AddReadyToParticipants < ActiveRecord::Migration[5.0]
  def change
    add_column :participants, :ready, :boolean, default: false
  end
end

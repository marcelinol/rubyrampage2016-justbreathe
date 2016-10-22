class ParticipantsController < ApplicationController
  def new
    if meditation_session.started?
      redirect_to root_path
    else
      @participant = meditation_session.participants.build
    end
  end

  def create
    @participant = meditation_session.participants.new(participant_params)
    if @participant.save
      redirect_to @participant.meditation_session
    else
      redirect_to root_path
    end
  end

  private

  def participant_params
    params.require(:participant).permit(:name)
  end

  def meditation_session
    @meditation_session ||= MeditationSession.find(params[:meditation_session_id])
  end
end

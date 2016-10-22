class MeditationSessionsController < ApplicationController
  def new
    @session = MeditationSession.new
    @session.participants.build
  end

  def create
    @session = MeditationSession.new(session_params)
    if @session.save
      redirect_to @session
    else
      render :new
    end
  end

  def show
    @session = MeditationSession.find(params[:id])
  end

  def update
    @session = MeditationSession.find(params[:id])
    if @session.update_attributes(session_params)
      redirect_to action: :show
    end
  end

  private

  def session_params
    params.require(:meditation_session).permit(:duration, :status,
               participants_attributes: [:id, :name])
  end
end

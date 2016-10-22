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
      redirect_to root_path
    end
  end

  def show
    @session = MeditationSession.find(params[:id])

    respond_to do |format|
      format.html
      format.js {
        ## We should send all the participants objects and not only the names of them.
        ## With the objects, we can create a better list in the view.
        participants_names = { participants: @session.participants.pluck(:name).join(', ') }
        render json: { meditation_session: @session.as_json.merge(participants_names) }
      }
    end
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

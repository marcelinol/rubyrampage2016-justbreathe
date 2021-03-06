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
      respond_to do |format|
        format.html { redirect_to action: :show }
        format.js { head :ok }
      end
    end
  end

  def search
    return if params[:q].blank?
    @session = MeditationSession.waiting.find_by(id: params[:q])
    if @session
      redirect_to new_meditation_session_participant_path(@session)
    else
      flash[:danger] = "Couldn't find session with ID #{params[:q]}"
      render :search
    end
  end

  private

  def session_params
    params.require(:meditation_session).permit(:duration, :status,
               participants_attributes: [:id, :name])
  end
end

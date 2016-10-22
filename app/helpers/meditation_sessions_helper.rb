module MeditationSessionsHelper
  def options_for_duration
    options_for_select(available_duration_options)
  end

  private

  def available_duration_options
    [
      [ '1 minute', 1 ],
      [ '2 minutes', 2 ],
      [ '5 minutes', 5 ],
      [ '10 minutes', 10 ],
      [ '15 minutes', 15 ],
      [ '20 minutes', 20 ],
      [ '30 minutes', 30 ],
      [ '45 minutes', 45 ],
      [ '1 hour', 60 ],
      [ '2 hours', 60*2 ],
      [ '4 hours', 60*4 ],
      [ '8 hours', 60*8 ],
    ]
  end
end

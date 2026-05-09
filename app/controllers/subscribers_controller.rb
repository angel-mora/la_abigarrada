class SubscribersController < ApplicationController
  allow_unauthenticated_access only: [:create]

  def create
    @subscriber = Subscriber.find_or_initialize_by(email: params[:email])
    
    if @subscriber.save
      redirect_to root_path, notice: "¡Gracias por suscribirte a nuestras transmisiones!"
    else
      redirect_to root_path, alert: "El correo es inválido o ya estás suscrito."
    end
  end
end

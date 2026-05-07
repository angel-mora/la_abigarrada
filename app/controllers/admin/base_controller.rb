module Admin
  class BaseController < ApplicationController
    # Authentication is already included in ApplicationController by the generator
    layout "admin"
  end
end

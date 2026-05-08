module Admin
  class PageHeaderComponent < ViewComponent::Base
    def initialize(title:, subtitle: nil, right_action: nil)
      @title = title
      @subtitle = subtitle
      @right_action = right_action
    end
  end
end

module Logo
  class LogoComponent < ViewComponent::Base
    PALETTES = {
      wiphala: ["#E21C21", "#F39A1E", "#FBED21", "#FFFFFF", "#3DB34A", "#2E3091", "#6E3B8E"],
      feminista: ["#6B2FA0", "#9B59B6", "#D5A6E6", "#2D1B4E", "#E8D5F5"],
      panafricana: ["#C8102E", "#1A1A1A", "#009639", "#FFD700"],
      lgbtiq: ["#E40303", "#FF8C00", "#FFED00", "#008026", "#004DFF", "#750787", "#F5A9B8", "#5BCEFA", "#613915", "#000000"],
      cmyk: ["#00AEEF", "#EC008C", "#FFF200", "#1A1A1A"],
      rojinegra: ["#C8102E", "#1A1A1A"]
    }.freeze

    SIZES = {
      sm: "1rem",
      md: "1.5rem",
      lg: "2.25rem",
      xl: "3.5rem"
    }.freeze

    def initialize(palette: :wiphala, size: :md, show_subline: false, dark_bg: false, line_style: :solid)
      @palette = palette.to_sym
      @size = size.to_sym
      @show_subline = show_subline
      @dark_bg = dark_bg
      @line_style = line_style.to_sym # :solid or :segments
    end

    private

    def colors
      PALETTES.fetch(@palette, PALETTES[:wiphala])
    end

    def font_size
      SIZES.fetch(@size, SIZES[:md])
    end

    def text_color
      @dark_bg ? "#FFFFFF" : "#1A1A1A"
    end
  end
end

require 'docx'

class DocxImporter
  def self.import(file_path)
    doc = Docx::Document.open(file_path)
    html = ""
    
    doc.paragraphs.each do |p|
      if p.text.present?
        html += "<p>#{p.to_html}</p>"
      end
    end
    
    html
  end
end

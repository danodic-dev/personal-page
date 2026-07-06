Jekyll::Hooks.register [:documents, :pages], :post_render do |doc|
  baseurl = doc.site.config["baseurl"].to_s
  next if baseurl.empty?
  next unless doc.output

  doc.output = doc.output.gsub(%r{(src|href)="/assets/}) { "#{$1}=\"#{baseurl}/assets/" }
end

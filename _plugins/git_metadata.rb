Jekyll::Hooks.register [:posts, :pages], :pre_render do |doc|
  path = doc.path
  next unless File.exist?(path)

  log = `git log -1 --format="%an|%aI" -- "#{path}" 2>/dev/null`.strip
  next if log.empty?

  author, date_str = log.split("|", 2)
  doc.data["git_author"] = author
  doc.data["git_date"]   = DateTime.parse(date_str) rescue nil
end

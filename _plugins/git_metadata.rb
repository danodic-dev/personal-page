Jekyll::Hooks.register [:posts, :pages], :pre_render do |doc|
  path = doc.path
  next unless File.exist?(path)

  last_log = `git log -1 --format="%an|%aI" -- "#{path}" 2>/dev/null`.strip
  next if last_log.empty?

  author, last_date_str = last_log.split("|", 2)
  doc.data["git_author"]   = author
  doc.data["git_date"]     = DateTime.parse(last_date_str) rescue nil

  first_date_str = `git log --follow --format="%aI" -- "#{path}" 2>/dev/null | tail -1`.strip
  unless first_date_str.empty?
    created = DateTime.parse(first_date_str) rescue nil
    doc.data["git_created"] = created if created && created != doc.data["git_date"]
  end
end

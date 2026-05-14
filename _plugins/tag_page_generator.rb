module Jekyll
  class TagPageGenerator < Generator
    safe true
    priority :low

    def generate(site)
      collection_docs = site.collections.values.flat_map(&:docs)
      all_pages = site.pages + collection_docs

      site.tags.each_key do |tag|
        next if all_pages.any? { |p| p.data['permalink'] == "/#{tag}/" }

        site.pages << TagPage.new(site, site.source, tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, tag)
      @site = site
      @base = base
      @dir  = ''
      @name = "tag--#{tag}.html"

      self.process(@name)
      self.data = {
        'layout'    => 'tag_page',
        'tag'       => tag,
        'title'     => tag.split(/[-_]/).map(&:capitalize).join('-'),
        'permalink' => "/#{tag}/"
      }
    end
  end
end

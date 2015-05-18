require 'yaml'
require 'nokogiri'
require 'pry'

namespace :ccg do
  desc 'Generate markdown files from source.'
  task :generate do
    Dir["source/**/*.yaml"].each do |yaml_file|
      yaml_hash = YAML.load_file(yaml_file)
      parse_yaml(yaml_hash)
      clear_output_directory
      write_posts_files
    end
  end

  def parse_yaml(hash)
    @md_file = hash['md_file']
    @country = hash['country'].downcase
    @date = /(\d{4}\-\d{2}\-\d{2})/.match(@md_file)[1]
    @entries = hash['entries']
  end

  def clear_output_directory
    FileUtils.rm_rf(Dir.glob("_posts/#{@country}/*"))
  end

  def write_posts_files
    md_str = open("source/#{@md_file}").read
    html_doc = Nokogiri::HTML(md_str)
    @entries.each do |entry|
      entry['content'] = html_doc.css('#' + "#{entry['section_id']}").text.lstrip.chomp
      entry['content'].gsub!(/\(images\//, '(../images/')
      write_entry_to_file(entry)
    end
  end

  def write_entry_to_file(entry)
    file_path = "_posts/#{@country}/#{@date}-#{entry['section_id']}.md"
    File.open(file_path, 'w') do |f|
      f.write("---\n"                                                  \
              "permalink: '#{@country}/#{entry['section_id']}.html'\n" \
              "published: true\n"                                      \
              "layout: default\n"                                      \
              "---\n"                                                  \
              "#{entry['content']}\n")
    end
  end

end

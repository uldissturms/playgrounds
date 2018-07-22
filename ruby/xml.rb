# require 'multi_xml'
# require 'xmlsimple'
require "rexml/document"

# MultiXml.parser = :rexml

include REXML  # so that we don't have to prefix everything with REXML::...

def walk n
  if n.nil?
    return
  end

  puts 'name:', n.name, 'text:', n.text, 'type:', n.node_type

  n.elements.each { |e| walk e }
  puts 'ATTRS:', n.attributes.to_a
end

# walk (Document.new %(<?xml version="1.0" encoding="UTF-8"?><a b="c">d</a>))
walk (Document.new %(<a></a><b></b>))

# puts MultiXml.parse(a)
# puts XmlSimple.xml_in(a)


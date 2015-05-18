import DS from 'ember-data';

export default DS.Model.extend({
  pdf_title: DS.attr('string'),
  pdf_chapter: DS.attr('string'),
  pdf_section: DS.attr('string'),
  section_title: DS.attr('string'),
  country: DS.attr('string'),
  industry: DS.attr('string'),
  topic: DS.attr('string'), 
  section_url: DS.attr('string'),


  country_full: function(){
    return this.get('pdf_title').substring(28);

  }.property('pdf_title'),

  content: function() {
    return  '<iframe src="/ccg' + this.get('section_url').substring(30) + '" frameborder="0"></iframe>' ;
  }.property('section_url')
});

import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  queryParams: ['q', 'countries', 'sources', 'industries', 'topics', 'page'],

  q: null,
  qField: Ember.computed.oneWay('q'),

  showReport: false,

  countries: null,
  countriesField: function() {
    var sources = String(this.get('countries')).split(',');
    var selected = this.get('countryList').filter(function(item) {
      return sources.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('countries'),

  industries: null,
  industriesField: function() {
    var industries = String(this.get('industries')).split(',');
    var selected = this.get('industryList').filter(function(item) {
      return industries.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('industries'),

  topics: null,
  topicsField: function() {
    var topics = String(this.get('topics')).split(',');
    var selected = this.get('topicList').filter(function(item) {
      return topics.find(function(given) {
        return (item.value === given);
      });
    });
    return selected;
  }.property('topics'),

  page: 1,
  pageField: Ember.computed.oneWay('pageField'),

  industryList: [
    {value: 'Aircraft and Parts', label: 'Aircraft and Parts'},
    {value: 'Air Pollution Control Equipment', label: 'Air Pollution Control Equipment'},
    {value: 'Air Pollution Control Equipment', label: 'Air Pollution Control Equipment'},
    {value: 'Aviation', label: 'Aviation'},
    {value: 'Defense', label: 'Defense'},
    {value: 'Electric Power and Renewable Energy', label: 'Electric Power and Renewable Energy'},
    {value: 'Franchising', label: 'Franchising'},
    {value: 'Marine Industries', label: 'Marine Industries'},
    {value: 'Medical Device and Healthcare Service', label: 'Medical Device and Healthcare Service'},
    {value: 'Railway and Metro', label: 'Railway and Metro'},
    {value: 'Travel and Tourism', label: 'Travel and Tourism'},
  ],

  topicList: [
    {value: 'Automotive', label: 'Automotive'},
    {value: 'Aviation - Overview', label: 'Aviation - Overview'},
    {value: 'Avation - Opportunities', label: 'Avation - Opportunities'},
    {value: 'Business Customs', label: 'Business Customs'},
    {value: 'Defense - Resources', label: 'Defense - Resources'},
    {value: 'Electronic Commerce', label: 'Electronic Commerce'},
    {value: 'Franchising - Resources', label: 'Franchising - Resources'},
    {value: 'Green Building - Web Resources', label: 'Green Building - Web Resources'},
    {value: 'Hotels in Argentina', label: 'Hotels in Argentina'},
    {value: 'Investment Climate in Argentina', label: 'Investment Climate in Argentina'},
    {value: 'Local Professional Services', label: 'Local Professional Services'},
    {value: 'Market Overview', label: 'Market Overview'},
    {value: 'Market Challenges', label: 'Market Challenges'},
    {value: 'Market Opportunities', label: 'Market Opportunities'},
    {value: 'Market Entry Strategy', label: 'Market Entry Strategy'},
    {value: 'Safety Security Market - Sub-Sector Best Prospects', label: 'Safety Security Market - Sub-Sector Best Prospects'},
    {value: 'Selling Factors/Techniques', label: 'Selling Factors/Techniques'},
    {value: 'Selling Financial Services', label: 'Selling Financial Services'},
    {value: 'Selling to the Government', label: 'Selling to the Government'},
    {value: 'Standards Overview', label: 'Standards Overview'},
    {value: 'Standards Organizations', label: 'Standards Organizations'},
    {value: 'Using an Agent or Distributor', label: 'Using an Agent or Distributor'},
    {value: 'U.S. Embassy Panama Contacts', label: 'U.S. Embassy Panama Contacts'},
    {value: 'Web Resources', label: 'Web Resources'},
  ],

  countryList: [
    {label: 'Argentina', value: 'AR'},
    {label: 'Brazil', value: 'BR'},
    {label: 'China', value: 'CN'},
    {label: 'Colombia', value: 'CO'},
    {label: 'Panama', value: 'PA'},
  ]
});

import Ember from 'ember';

export default Ember.Route.extend({
  //needs: ['country-commercial-guides/index'],

  setupController: function(controller) {
    controller.get('controllers.application').set('showCcg', true);
  },

  queryParams: {
    q: { refreshModel: true },
    countries: { refreshModel: true },
    sources: { refreshModel: true },
    industries: { refreshModel: true },
    page: { refreshModel: true }
  },

  actions: {
    search: function(page) {
      var countries,
        sources,
        industries,
        topics,
        countriesField = this.controller.get('countriesField'),
        sourcesField = this.controller.get('sourcesField'),
        industriesField = this.controller.get('industriesField'),
        topicsField = this.controller.get('topicsField');

      if (countriesField) {
        countries = countriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('countries', countries);

      if (sourcesField) {
        sources = sourcesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('sources', sources);

      if (industriesField) {
        industries = industriesField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('industries', industries);

      if (topicsField) {
        topics = topicsField.map(function(item) {
          return item.value;
        });
      }
      this.controller.set('topics', topics);

      this.controller.set('q', this.controller.get('qField'));
      this.controller.set('page', (page || 1));
    }
  }
});

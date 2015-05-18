import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params, transition) {

    var p = transition.queryParams;
    var model;

    // TODO == undefined
    if (p.countries || p.industries || p.topics) {
      model = this.store.find('country-commercial-guide', {
        countries: p.countries,
        industries: p.industries,
        topics: p.topics,
        //page: p.page,
        size: '100',
      });
      if (model) {
        this.controllerFor('application').set('showCcgReport', true);
      }
    }

    return model;
  }
});

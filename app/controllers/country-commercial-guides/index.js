import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'country-commercial-guides',
  page: Ember.computed.alias('controllers.country-commercial-guides.page'),
  total: function() {
    var total = this.store.metadataFor(this.get('model.type')).total;
    return total;
  }.property('model'),
});

import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.find('user', {
      q: params.q,
      limit: 20,
      skip: 0
    });
  }
});

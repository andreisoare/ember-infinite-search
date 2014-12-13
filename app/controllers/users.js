import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  searchText: '',
  searchTextBinding: Ember.Binding.oneWay('q'),

  hasMore: function() {
    var total = this.get('model.meta.total');
    var currentLength = this.get('model.length');
    return total > currentLength;
  }.property('model.meta.total', 'model.[]'),

  actions: {
    search: function() {
      this.set('q', this.get('searchText'));
    },

    fetchMore: function(callback) {
      var promise = this.store.find('user', {
        q: this.get('q'),
        limit: 10,
        skip: this.get('model.length')
      });
      callback(promise);
    }
  }
});

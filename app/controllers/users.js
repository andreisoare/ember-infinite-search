import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  searchText: '',
  searchTextBinding: Ember.Binding.oneWay('q'),

  hasMore: true,

  actions: {
    search: function() {
      this.set('q', this.get('searchText'));
    },

    fetchMore: function(callback) {
      console.log('Fetch more data!');
    }
  }
});

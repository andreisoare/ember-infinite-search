import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  searchText: '',
  searchTextBinding: Ember.Binding.oneWay('q'),

  actions: {
    search: function() {
      this.set('q', this.get('searchText'));
    }
  }
});

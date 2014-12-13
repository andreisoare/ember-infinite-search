import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['users/results'],
  q: Ember.computed.alias('controllers.users/results.q'),

  searchText: '',
  searchTextBinding: Ember.Binding.oneWay('q'),

  actions: {
    search: function() {
      this.set('q', this.get('searchText'));
    }
  }
});

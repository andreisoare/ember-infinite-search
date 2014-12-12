import Ember from 'ember';

export default Ember.Controller.extend({
  searchText: '',

  actions: {
    search: function() {
      console.log('Search for: ', this.get('searchText'));
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('person');
  },

  actions: {

    deletePerson(person) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        person.destroyRecord();
      }
    }
  }
});

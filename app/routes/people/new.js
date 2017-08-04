import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('person');
  },

  actions: {

    savePerson(newPerson) {
      newPerson.save().then(() => this.transitionTo('people'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.createRecord('goal',
      {title: params.title, score: params.score, person_id: params.person_id}
    );
  },

  actions: {

    saveGoal(newGoal) {
      newGoal.save().then(() => this.transitionTo('people'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});

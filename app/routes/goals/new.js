import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var individual;
    this.store.findRecord('person', 1).then(function(person) {
      individual = person;
    });
    return this.store.createRecord('goal', {title: params.title, score: params.score, person: individual});
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
  },

  people: function(){
    return this.store.find('person');
  }.property()
});

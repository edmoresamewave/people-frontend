import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  personScore: DS.attr('number'),

  goals: DS.hasMany('goal'),

  isValid: Ember.computed.notEmpty('firstName'),
  isValid: Ember.computed.notEmpty('lastName'),

  averageScore: Ember.computed('personScore', function() {
    var formatted = this.get('personScore');
    return parseFloat(formatted).toFixed(2);
  }),
});

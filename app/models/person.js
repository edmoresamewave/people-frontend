import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  personScore: DS.attr('number'),

  goals: DS.hasMany('goal'),

  isValid: Ember.computed.notEmpty('firstName'),
  isValid: Ember.computed.notEmpty('lastName')
});

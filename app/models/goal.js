import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  person_id: DS.attr('number'),

  person: DS.belongsTo('person'),

  isValid: Ember.computed.notEmpty('title'),
  isValid: Ember.computed.notEmpty('score'),

  isValid: Ember.computed('score', function () {
    var score = this.get('score')
    if (score <= 1 || score <= 10){
      return true;
    }else{
      return false;
    }
  }),
});

import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize() {
    var json = this._super(...arguments);

    json.data.attributes.person_id = json.data.attributes['person-id'];
    delete json.data.attributes['person-id'];

    return json;
  }
});

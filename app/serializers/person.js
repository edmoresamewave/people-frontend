import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize() {
    var json = this._super(...arguments);

    json.data.attributes.first_name = json.data.attributes['first-name'];
    json.data.attributes.last_name = json.data.attributes['last-name'];

    delete json.data.attributes['first-name'];
    delete json.data.attributes['last-name'];
    delete json.data.attributes['person-score'];

    return json;
  },
});

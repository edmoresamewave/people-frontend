import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people', { path: '/' }, function() {
    this.route('new');
    this.route('edit', { path: '/:person_id/edit' });
    this.route('goals', { path: '/:person_id/goals' });
    this.route('goals.new', { path: '/:person_id/goals/new' });
  });
});

export default Router;

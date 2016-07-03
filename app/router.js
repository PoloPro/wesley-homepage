import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('contact');
  });
  this.route('projects');
  this.route('skills');
  this.route('resume');
});

export default Router;

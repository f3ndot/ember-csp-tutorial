import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('video');
  this.route('font');
  this.route('deadman');
  this.route('how-to-install');
});

export default Router;

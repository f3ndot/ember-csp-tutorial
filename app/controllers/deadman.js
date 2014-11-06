import Ember from 'ember';

export default Ember.Controller.extend({
  prettyJSON: function() {
    return JSON.stringify(JSON.parse(this.get('model')), undefined, 2);
  }.property('model')
});
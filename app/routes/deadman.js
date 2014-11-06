import Ember from 'ember';
import icAjax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return icAjax('https://www.justinbull.ca/life-status.php');
  }
});
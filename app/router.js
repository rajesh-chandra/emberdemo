import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('manufactures', function() {
    this.route('show', { path: '/:car_id' });
  });
  this.route('cars', function() {
    this.route('show', { path: '/:car_id' });
    this.route('brand', { path: '/:brand_id'});
  });
});

export default Router;

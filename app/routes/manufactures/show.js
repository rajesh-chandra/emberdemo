import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
	   	return this.get('store').query('car', { brand: params.car_id });
	}
});

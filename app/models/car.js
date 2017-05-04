import DS from 'ember-data';
export default DS.Model.extend({
	title: DS.attr(),
  	manufacturer: DS.attr(),
  	image: DS.attr(),
  	configuration: DS.attr(),
  	color: DS.attr(),
  	description: DS.attr()
});

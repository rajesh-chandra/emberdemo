import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manufacturer-listing', 'Integration | Component | manufacturer listing', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{manufacturer-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#manufacturer-listing}}
      template block text
    {{/manufacturer-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

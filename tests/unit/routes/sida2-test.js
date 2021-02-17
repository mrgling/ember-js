import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sida2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sida2');
    assert.ok(route);
  });
});

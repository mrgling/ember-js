import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sida1', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sida1');
    assert.ok(route);
  });
});

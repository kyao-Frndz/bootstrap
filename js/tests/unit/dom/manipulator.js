$(function () {
  'use strict'

  QUnit.module('manipulator')

  QUnit.test('should be defined', function (assert) {
    assert.expect(1)
    assert.ok(Manipulator, 'Manipulator is defined')
  })

  QUnit.test('should set checked for input', function (assert) {
    assert.expect(2)

    var $input = $('<input type="checkbox" />').appendTo('#qunit-fixture')
    Manipulator.setChecked($input[0], true)

    assert.ok($input[0].checked)

    Manipulator.setChecked($input[0], false)

    assert.ok(!$input[0].checked)
  })

  QUnit.test('should not set checked for non input element', function (assert) {
    assert.expect(1)

    var $div = $('<div />').appendTo('#qunit-fixture')
    Manipulator.setChecked($div[0], true)

    assert.ok(typeof $div[0].checked === 'undefined')
  })

  QUnit.test('should verify if an element is checked', function (assert) {
    assert.expect(2)

    var $input = $('<input type="checkbox" />').appendTo('#qunit-fixture')
    Manipulator.setChecked($input[0], true)

    assert.ok(Manipulator.isChecked($input[0]))

    Manipulator.setChecked($input[0], false)

    assert.ok(!Manipulator.isChecked($input[0]))
  })

  QUnit.test('should throw an error when the element is not an input', function (assert) {
    assert.expect(1)

    var $div = $('<div />').appendTo('#qunit-fixture')
    try {
      Manipulator.isChecked($div[0])
    } catch (e) {
      assert.strictEqual(e.message, 'INPUT parameter is not an HTMLInputElement')
    }
  })

  QUnit.test('should set data attribute', function (assert) {
    assert.expect(1)

    var $div = $('<div />').appendTo('#qunit-fixture')

    Manipulator.setDataAttribute($div[0], 'test', 'test')

    assert.strictEqual($div[0].getAttribute('data-test'), 'test')
  })

  QUnit.test('should set data attribute in lower case', function (assert) {
    assert.expect(1)

    var $div = $('<div />').appendTo('#qunit-fixture')

    Manipulator.setDataAttribute($div[0], 'tEsT', 'test')

    assert.strictEqual($div[0].getAttribute('data-test'), 'test')
  })

  QUnit.test('should remove data attribute', function (assert) {
    assert.expect(2)

    var $div = $('<div />').appendTo('#qunit-fixture')

    Manipulator.setDataAttribute($div[0], 'test', 'test')

    assert.strictEqual($div[0].getAttribute('data-test'), 'test')

    Manipulator.removeDataAttribute($div[0], 'test')

    assert.strictEqual($div[0].getAttribute('data-test'), null)
  })

  QUnit.test('should remove data attribute in lower case', function (assert) {
    assert.expect(2)

    var $div = $('<div />').appendTo('#qunit-fixture')

    Manipulator.setDataAttribute($div[0], 'test', 'test')

    assert.strictEqual($div[0].getAttribute('data-test'), 'test')

    Manipulator.removeDataAttribute($div[0], 'tESt')

    assert.strictEqual($div[0].getAttribute('data-test'), null)
  })

  QUnit.test('should return element offsets', function (assert) {
    assert.expect(2)

    var $div = $('<div />').appendTo('#qunit-fixture')

    var offset = Manipulator.offset($div[0])

    assert.ok(typeof offset.top === 'number')
    assert.ok(typeof offset.left === 'number')
  })

  QUnit.test('should return element position', function (assert) {
    assert.expect(2)

    var $div = $('<div />').appendTo('#qunit-fixture')

    var offset = Manipulator.position($div[0])

    assert.ok(typeof offset.top === 'number')
    assert.ok(typeof offset.left === 'number')
  })

  QUnit.test('should toggle class', function (assert) {
    assert.expect(2)

    var $div = $('<div class="test" />').appendTo('#qunit-fixture')

    Manipulator.toggleClass($div[0], 'test')

    assert.ok(!$div.hasClass('test'))

    Manipulator.toggleClass($div[0], 'test')

    assert.ok($div.hasClass('test'))

    Manipulator.toggleClass(null)
  })
})

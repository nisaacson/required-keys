var should = require('should');
var rk = require('../index');
describe('Check Required Keys', function(done) {
  it('should pass async truthy  when all keys map to true values', function (done) {
    var keys = ['dog', 'cat', 'lemon'];
    var data = {
      dog: 'dog',
      cat: 'cat',
      lemon: 'lemon'
    };
    rk.truthy(data, keys, function (err, reply) {
      should.not.exist(err, 'truthy error: ' + err);
      done();
    });
  });

  it('should fail async truthy  when all not all keys map to true values', function (done) {
    var keys = ['dog', 'cat', 'lemon'];
    var data = {
      dog: 'dog',
      cat: 'cat',
      lemon: false
    };
    rk.truthy(data, keys, function (err, reply) {
      should.exist(err, 'truthy error should exist');
      done();
    });
  });

  it('should pass sync nonNull  when all all keys map to non-null values', function () {
    var keys = ['dog', 'cat', 'lemon'];
    var data = {
      dog: 'dog',
      cat: 'cat',
      lemon: false
    };
    var err = rk.nonNullSync(data, keys);
    should.not.exist(err);
  });

  it('should pass sync nonNull  when all not all keys map to non-null values', function () {
    var keys = ['dog', 'cat', 'lemon'];
    var data = {
      dog: 'dog',
      cat: 'cat',
      lemon: null
    };
    var err = rk.nonNullSync(data, keys);
    should.exist(err);
  });
});
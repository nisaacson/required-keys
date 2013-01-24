var should = require('should')
var rk = require('../index');
describe('Check Required Keys', function(done) {
  it('should pass when all keys are set', function (done) {
    var keys = ['dog', 'cat', 'lemon']

    var data = {
      dog: 'dog',
      cat: 'cat',
      lemon: 'lemon'
    }
    rk.truthy(data, keys, function (err, reply) {
      should.not.exist(err, 'truthy error: ' + err);
      done();
    });
  });
});
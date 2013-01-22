function keysOnly(data, fields, callback) {
  for (var i in fields) {
    var key = fields[i];
    if (!data.hasOwnProperty(key) || data[key] === undefined) {
      var message = 'missing key: ' + key.toString();
      if (callback) {
        return callback(message, false);
      }
      return false;
    }
  }
  if (callback) {
    return callback(null, true);
  }
  return true;
}


function nonNull(data, fields, cb) {
  var message;
  for (var i in fields) {
    var key = fields[i];
    if (!data.hasOwnProperty(key)) {
      message = 'key does not exist in data: ' + key.toString();
      if (cb) {
        return cb(message, false);
      }
      return false;
    }
    if(data[key] === null) {
      message = 'value for key is null: ' + key.toString();
      if (cb) {
        return cb(message, false);
      }
      return false;
    }
    if(data[key] === undefined) {
      message = 'value for key is undefined: ' + key.toString();
      if (cb) {
        return cb(message, false);
      }
      return false;
    }
  }
  if (cb) {
    return cb(null, true);
  }
  return true;
}


function truthy(data, fields, cb) {
  var message;
  for (var i in fields) {
    var key = fields[i];
    if (!data.hasOwnProperty(key)) {
      message = 'key does not exist in data: ' + key.toString();
      if (cb) {
        return cb(message, false);
      }
      return false;
    }
    if(!data[key]) {
      message = 'value for key is falsy: ' + key.toString();
      if (cb) {
        return cb(message, false);
      }
      return false;
    }
  }
  if (cb) {
    return cb(null, true);
  }
  return true;
}


exports.nonNull = nonNull;
exports.keysOnly = keysOnly;

exports.truthy = truthy;
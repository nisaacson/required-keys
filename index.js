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


/**
 * @param {Object} data,
 * @param {Array} fields
 * @return null if all required keys exist and map to truthy values
 * @return {Array} An array containing errors about all keys that failed
 */
function truthySync(data, fields) {
  var keys = Object.keys(data);
  var errors = [];
  var err;
  for (var i in fields) {
    var key = fields[i];
    if (!data.hasOwnProperty(key)) {
      err = {
        message: 'key not set in data',
        key: key,
        value: undefined
      };
      errors.push(err);
    }
    else if (!data[key]) {
      err = {
        message: 'value is falsy',
        key: key,
        value: data[key]
      };
      errors.push(err);
    }
  }
  if (errors.length === 0) {
    return null;
  }
  return errors;
}


/**
 * @param {Object} data,
 * @param {Array} fields
 * @return null if all required keys exist and map to truthy values
 * @return {Array} An array containing errors about all keys that failed
 */
function nonNullSync(data, fields) {
  var keys = Object.keys(data);
  var errors = [];
  var err;
  for (var i in fields) {
    var key = fields[i];
    if (!data.hasOwnProperty(key)) {
      err = {
        message: 'key not set in data',
        key: key,
        value: undefined
      };
      errors.push(err);
    }
    else if (data[key] === undefined || data[key] === null) {
      err = {
        message: 'value is null',
        key: key,
        value: data[key]
      };
      errors.push(err);
    }
  }
  if (errors.length === 0) {
    return null;
  }
  return errors;
}

/**
 * @param {Object} data,
 * @param {Array} fields
 * @return null if all required keys exist and map to truthy values
 * @return {Array} An array containing errors about all keys that failed
 */
function keysOnlySync(data, fields) {
  var keys = Object.keys(data);
  var errors = [];
  var err;
  for (var i in fields) {
    var key = fields[i];
    if (!data.hasOwnProperty(key)) {
      err = {
        message: 'key not set in data',
        key: key,
        value: undefined
      };
      errors.push(err);
    }

  }
  if (errors.length === 0) {
    return null;
  }
  return errors;
}
exports.nonNull = nonNull;
exports.keysOnly = keysOnly;
exports.truthy = truthy;
exports.truthySync = truthySync;
exports.nonNullSync = nonNullSync;
exports.keysOnlySync = keysOnlySync;
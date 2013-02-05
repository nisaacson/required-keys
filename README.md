make sure the desired key value pairs exist in a given object

# Usage

### Async
You must pass a callback where the error parameter will be null if there are no errors
**rk.truthy**
```javascript
var rk = require('required-keys');
var keys = ['foo', 'bar'];
var data = {
  foo: false,
  bar: 'test'
}
rk.truthy(data, keys, function(err) {
  console.log('error', err);
});
```


**rk.nonNull**
**rk.keysOnly**



### Sync
Return null if all checks pass or an array of errors
**rk.truthySync**
**rk.nonNullSync**
**rk.keysOnlySync**


## Installation
`npm install -S required-keys`

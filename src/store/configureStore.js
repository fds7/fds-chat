// https://github.com/reactjs/redux/blob/master/examples/real-world/src/store/configureStore.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

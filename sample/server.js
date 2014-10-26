var zetta = require('zetta');
var Email = require('../');

var credentials = {
  user: process.env.EMAIL,
  pass: process.env.PASS
};

zetta()
  .use(Email, credentials)
  .listen(1337);

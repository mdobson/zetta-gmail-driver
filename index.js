var Device = require('zetta-device');
var util = require('util');
var mailer = require('nodemailer');

var Email = module.exports = function(credentials, name) {
  Device.call(this);
  this._name = name || 'Email Mailer';
  this._mailer = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: credentials.user,
      pass: credentials.pass
    }
  });
};
util.inherits(Email, Device);

Email.prototype.init = function(config) {
  config
    .type('email')
    .state('online')
    .name(this._name)
    .when('online', { allow: ['send-mail'] })
    .when('sending-mail', { allow: [] })
    .map('send-mail', this.sendMail, [{type: 'text', name: 'to'}, {type: 'text', name: 'from'}, {type: 'text', name: 'title'}, {type: 'text', name: 'body'}]);
};

Email.prototype.sendMail = function(to, from, title, body, cb){
  var self = this;
  this.state = 'sending-mail';
  var opts = {
    from: from,
    to: to,
    subject: title,
    text: body
  };

  this._mailer.sendMail(opts, function(err, info) {
    self.state = 'online';
    if(err) {
      if(cb) {
        cb(err);
      }
    } else {
      if(cb) {
        cb();
      }
    }
  });
};

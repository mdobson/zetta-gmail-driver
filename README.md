# Zetta Gmail Driver

## Installation

```bash
$ npm install zetta-gmail-driver --save
```

## Usage

```javascript
var zetta = require('zetta');
var Email = require('zetta-gmail-driver');

var credentials = {
  user: '<YOUR EMAIL ADDRESS>',
  pass: '<YOUR EMAIL PASSWORD>'
};

zetta()
  .use(Email, credentials)
  .listen(1337);
```

## Transitions

**send-email**

Arguments

* to - Recipient of the email
* from - Sender of the email
* title - your email subject line
* body - contents of your email





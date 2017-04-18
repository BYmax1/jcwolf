'use strict';

module.exports = {
  url: '/login',
  method: 'POST',
  schema:{
    name: 'required'
  },
  * handler(next) {
    this.body = 'login';
    yield next;
  }
};

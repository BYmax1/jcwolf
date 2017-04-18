/*
 * api 接口返回数据的统一格式封装
 */

'use strict';

const CODE = 400;
const TEXT = 'Zhuiyi Error';

module.exports = function(code, message) {
  this.status = CODE;
  this.message = TEXT;
  this.body = { code, message };
}

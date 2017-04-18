'use strict';

const errCode = localRequire('tools/errCode');

function valueVerifier(value, regex) {
  if (!value) return { boolean: false, reason: '不能为空' };
  if (regex instanceof RegExp && !regex.test(value)) {
    return {
      boolean: false,
      reason: '格式不正确'
    };
  }
  return { boolean: true };
}

module.exports = (schema, callback) => function* (next) {
  console.log(schema);
  const params = Object.assign({}, this.request.query, this.request.body);
  for (let i = 0, len = Object.keys(schema).length; i < len; i += 1) {
    const field = Object.keys(schema)[i];
    console.log(field);
    const result = valueVerifier(params[field], schema[field]);
    if (result.boolean !== true) {
      callback.call(this, errCode.params.code, `参数${field}${result.reason}`);
      return;
    }
  }
  yield next;
};

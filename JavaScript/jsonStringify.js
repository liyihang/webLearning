function stringify(params) {
  let type = typeof params;
  if (type !== 'object') {
    let res = params;
    // NaN 和infinity 返回null
    if (Number.isNaN(params) || params === Infinity) {
      return 'null';
      // function，undefined， symbol 返回undefined
    } else if (
      type === 'function' ||
      type === 'undefined' ||
      type === 'symbol'
    ) {
      return 'undefined';
    } else if (type === 'string') {
      return '"' + params + '"';
    }
    return String(res);
  } else if (type === 'object') {
    if (type === 'null') {
      return 'null';
    } else if (params.toJson && typeof params.toJson === 'function') {
      return stringify(data.toJson());
    } else if (params instanceof Array) {
      let res = [];
      params.forEach((item, index) => {
        if (
          typeof item === 'undefined' ||
          typeof item === 'function' ||
          typeof item === 'symbol'
        ) {
          res[index] = 'null';
        } else {
          res[index] = stringify(item);
        }
      });
      result = '[' + result + ']';
      return result.replace(/'/g, '"');
    } else {
      let res = [];
      Object.keys(params).forEach((item, index) => {
        if (typeof item !== 'symbol') {
          if (
            params[item] !== 'undefined' &&
            params[item] !== 'function' &&
            params[item] !== 'symbol'
          ) {
            res.push('"' + item + '"' + ':' + stringify(params[item]));
          }
        }
      });
      return ('{' + res + '}').replace(/'/g, '"');
    }
  }
}

var obj = {name:'jim',age:'22'}
console.log(stringify(obj))
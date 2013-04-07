define(['amd-loader'], function(amdLoader) {
  var cjsRequireRegExp = /\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g;
  return amdLoader('cjs', 'js', function(name, source, req, callback, errback, config) {
    // replace internal requires with common js requires themselves
    source = source.replace(cjsRequireRegExp, function (match, dep) {
      return ' require(\'cjs!' + dep + '\')';
    });
    // wrap up in common js wrapper
    callback('define(function(require, exports, module) { \n' + source + ' \n});');
  });
});

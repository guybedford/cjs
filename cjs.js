define(['amd-loader'], function(amdLoader) {
  var cjsRequireRegExp = /\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g;
  return amdLoader('cjs', 'js', function(name, source, req, callback, errback, config) {
    // replace internal relative requires with common js requires themselves
    // global requires are assumed to be requirejs requires
    source = source.replace(cjsRequireRegExp, function (match, dep) {
      if (dep.substr(0, 1) == '.')
        return ' require(\'cjs!' + dep + '\')';
      else
        return ' require(\'' + dep + '\')';
    });
    // wrap up in common js wrapper
    callback('define(function(require, exports, module) { (function(){var define=undefined;' + source + ' \n//# sourceURL=' + req.toUrl(name) + '\n})() });');
  });
});

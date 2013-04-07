CommonJS Loader Plugin for RequireJS
===

Load CommonJS modules without needing to convert them to AMD.

AMD and CommonJS are actually incredibly similar formats so this plugin is only 10 lines long.

You have an amazing CommonJS module you want to load so you do - 

```javascript
  require(['cjs!my-commonjs-module'], function(mymodule) {
  });
```

If your module looks like:

```javascript
  var someDep = require('a-dependency');
  exports.out = 'asdf';
```

Then it is dynamically converted into:

```javascript
  define(function(require, exports, module) {
    var someDep = require('cjs!a-dependency');
    exports.out = 'asdf';
  });
```

which is the AMD module format.

Dependencies are naturally handled by referring back to the plugin.

Supports:
* Cross-origin dynamic loading
* Builds
* Precompilation with the `optimizeAllPluginResources` r.js build option
* Amazingness

Built with the [AMD-Loader plugin helper](https://github.com/guybedford/amd-loader).

Install
---

```
  volo add guybedford/cjs
```

```
  bower install cjs
```

If not using package management, ensure that the [AMD-Loader](https://github.com/guybedford/amd-loader) plugin is installed.

If using bower, include the map or paths configurations:

```
  paths: {
    cjs: 'cjs/cjs',
    'amd-loader': 'amd-loader/amd-loader'
  }
```

License
---

MIT

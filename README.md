# Nunjucks function `min`

[![Build Status](https://travis-ci.org/jbmoelker/nunjucks-function-min.svg?branch=master)](https://travis-ci.org/jbmoelker/nunjucks-function-min)

[Nunjucks](https://mozilla.github.io/nunjucks/) [function](https://mozilla.github.io/nunjucks/templating.html#global-functions) to get lowest value from a sequence or mapping of values.

This function is based on and compatible with the [Twig `min` function](http://twig.sensiolabs.org/doc/functions/min.html).


## Install

```bash
$ npm install --save nunjucks-function-min
```

## Usage

Add as [global function](https://mozilla.github.io/nunjucks/api.html#addglobal):

```javascript
var nunjucks = require('nunjucks');
var min = require('nunjucks-function-min');

var env = new nunjucks.Environment();
env.addGlobal('min', min);
```

Use in template:

```jinja
{{ min(1, 3, 2) }}
{{ min([1, 3, 2]) }}
{{ min({ "2":"two", "1":"one", "3":"three", "5":"five", "4":"four" }) }}
```
Outputs `1`, `1`, `five`

[more examples](test.js)


## API

### `min(...values)`

### values

Type: sequence of `number`s / `array` / `object`

If `values` is an array or sequence of numbers, `min` returns the lowest value.
If `values` is an object it compares and returns the lowest object value (keys are ignored).


## Support

Same support as Nunjucks:
* Node >= v0.10
* all modern browsers
* IE8 requires [es5-shim](https://github.com/es-shims/es5-shim)


## License

[MIT Licensed](LICENSE) © [Jasper Moelker](https://twitter.com/jbmoelker)

var nunjucks = require('nunjucks');
var min = require('./');
var test = require('tape');

var env = new nunjucks.Environment();
env.addGlobal('min', min);

// tests based on https://github.com/twigphp/Twig/blob/f0a4fa/test/Twig/Tests/Fixtures/functions/min.test

test('Returns lowest value from sequence of numbers', function (t) {
	t.equal(env.renderString('{{ min(2, 1, 3, 5, 4) }}'), '1');
	t.equal(env.renderString('{{ min(2, 1.25, 1.5, 1.251) }}'), '1.25');
	t.end();
});

test('Returns lowest value array of numbers', function (t) {
	t.equal(env.renderString('{{ min([2, 1, 3, 5, 4]) }}'), '1');
	t.equal(env.renderString('{{ min([2, 1.25, 1.5, 1.251]) }}'), '1.25');
	t.end();
});

test('Returns lowest value from object / mapping values', function (t) {
	t.equal(env.renderString('{{ min({"2":"two", "1":"one", "3":"three", "5":"five", "4":"four"}) }}'), 'five');
	t.equal(env.renderString('{{ min({"1":"two", "2":"one", "3":"three", "4":"five", "9":"nine"}) }}'), 'five');
	t.end();
});

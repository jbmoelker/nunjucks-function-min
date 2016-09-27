'use strict';

// based on https://github.com/twigphp/Twig/blob/f0a4fa/test/Twig/Tests/Fixtures/functions/min.test

module.exports = function min(input) {
	var values = [];
	if (arguments.length > 1) {
		values = [].slice.call(arguments);
	} else if (typeof input === 'array') {
		values = input;
	} else if (typeof input === 'object') {
		values = Object.keys(input).map(function(key) {
			return input[key];
		});
	}

	return values
		.sort(sortAscending)
		.shift();
};

function sortAscending(a, b) {
	if (typeof a === 'string' || typeof b === 'string') {
		return ('' + a).localeCompare('' + b);
	} else {
		return a - b;
	}
}

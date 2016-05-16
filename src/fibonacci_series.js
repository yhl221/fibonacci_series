'use strict';

function fibonacci_series(n) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (var i = 2; i <= n; i++)
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

    return fibonacci;
}

module.exports = fibonacci_series;

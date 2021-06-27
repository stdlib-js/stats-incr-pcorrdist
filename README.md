<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrpcorrdist

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a [sample Pearson product-moment correlation distance][pearson-correlation] incrementally.

<section class="intro">

The [sample Pearson product-moment correlation distance][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:pearson_distance" align="center" raw="d_{x,y} = 1 - r_{x,y} = 1 - \frac{\operatorname{cov_n(x,y)}}{\sigma_x \sigma_y}" alt="Equation for the Pearson product-moment correlation distance."> -->

<div class="equation" align="center" data-raw-text="d_{x,y} = 1 - r_{x,y} = 1 - \frac{\operatorname{cov_n(x,y)}}{\sigma_x \sigma_y}" data-equation="eq:pearson_distance">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/pcorrdist/docs/img/equation_pearson_distance.svg" alt="Equation for the Pearson product-moment correlation distance.">
    <br>
</div>

<!-- </equation> -->

where `r` is the [sample Pearson product-moment correlation coefficient][pearson-correlation], `cov(x,y)` is the sample covariance, and `σ` corresponds to the sample standard deviation. As `r` resides on the interval `[-1,1]`, `d` resides on the interval `[0,2]`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-pcorrdist
```

</section>

<section class="usage">

## Usage

```javascript
var incrpcorrdist = require( '@stdlib/stats-incr-pcorrdist' );
```

#### incrpcorrdist( \[mx, my] )

Returns an accumulator `function` which incrementally computes a [sample Pearson product-moment correlation distance][pearson-correlation].

```javascript
var accumulator = incrpcorrdist();
```

If the means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrpcorrdist( 3.0, -5.5 );
```

#### accumulator( \[x, y] )

If provided input value `x` and `y`, the accumulator function returns an updated [sample correlation coefficient][pearson-correlation]. If not provided input values `x` and `y`, the accumulator function returns the current [sample correlation coefficient][pearson-correlation].

```javascript
var accumulator = incrpcorrdist();

var d = accumulator( 2.0, 1.0 );
// returns 1.0

d = accumulator( 1.0, -5.0 );
// returns 0.0

d = accumulator( 3.0, 3.14 );
// returns ~0.035

d = accumulator();
// returns ~0.035
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrpcorrdist = require( '@stdlib/stats-incr-pcorrdist' );

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrpcorrdist();

// For each simulated datum, update the sample correlation distance...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-pcorrdist.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-pcorrdist

[test-image]: https://github.com/stdlib-js/stats-incr-pcorrdist/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-pcorrdist/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-pcorrdist/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-pcorrdist?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-pcorrdist.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-pcorrdist/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-pcorrdist/main/LICENSE

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

</section>

<!-- /.links -->
